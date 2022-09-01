import { React, useState, useEffect } from "react";
import userAvater from "../../images/userAvater.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loader from "../../shared/Loader/Loader";
import logout from "../Authentication/LogOut/LogOut";

const Update = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/user/${params.email}`)
      .then((res) => {
        if (res.status === 200) {
          setUserData(res.data.result[0]);
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something Went Wrong! Try again letter!");
      });
  }, []);

  const logOut = () => {
    logout();
    navigate("/");
    toast.success("Log Out Success");
  };

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    axios
      .put(`http://localhost:5001/api/v1/user/${userData._id}`, data, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Update SuccessFully Done!");
          navigate("/user-profile");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something Wrong! Try Again latter!");
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="card sign-in-box mx-auto mt-4"
          style={{ width: "80%", height: "80vh" }}
        >
          <div className="card-body">
            <div className="text-end">
              <button className="btn btn-primary" onClick={logOut}>
                Log Out
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-5 mt-5 pt-3">
                  <div className="left-side-dashboard">
                    <img
                      style={{ width: "200px" }}
                      src={userAvater}
                      alt="avater"
                    />

                    <div className="col-md-8 d-flex align-items-center mx-auto mt-4">
                      <label
                        htmlFor="exampleInputname"
                        className="form-label fw-bold mt-4"
                      >
                        Name : &nbsp; &nbsp;
                      </label>
                      <input
                        type="text"
                        value={userData.name}
                        readOnly
                        className="form-control ms-3"
                        id="exampleInputname"
                      />
                    </div>
                    <div className="col-md-8 d-flex align-items-center mx-auto ">
                      <label
                        htmlFor="exampleInputtitle"
                        className="form-label fw-bold mt-4"
                      >
                        Title : &nbsp; &nbsp;
                      </label>
                      <input
                        type="text"
                        name="title"
                        {...register("title")}
                        placeholder="enter your title"
                        className="form-control ms-3"
                        id="exampleInputtitle"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 mt-5 pt-5">
                  <div className="row">
                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center ">
                        <label
                          htmlFor="exampleInputemail"
                          className="form-label fw-bold"
                        >
                          Email:
                        </label>
                        <input
                          type="email"
                          value={userData.email}
                          readOnly
                          className="form-control ms-2"
                          id="exampleInputemail"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center">
                        <label
                          htmlFor="exampleInputage"
                          className="form-label fw-bold"
                        >
                          Age:
                        </label>
                        <input
                          type="text"
                          name="age"
                          {...register("age")}
                          placeholder="enter your age"
                          className="form-control ms-2"
                          id="exampleInputage"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center">
                        <label
                          htmlFor="exampleInputdob"
                          className="form-label fw-bold"
                        >
                          BirthDay:
                        </label>
                        <input
                          type="date"
                          name="dob"
                          {...register("dob")}
                          placeholder="enter your Birth Date"
                          className="form-control ms-2"
                          id="exampleInputdob"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center">
                        <label
                          htmlFor="exampleInputgender"
                          className="form-label fw-bold"
                        >
                          Gender:
                        </label>
                        <select
                          className="form-select ms-2"
                          id="exampleInputgender"
                          name="gender"
                          {...register("gender")}
                        >
                          <option selected>select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center">
                        <label
                          htmlFor="exampleInputphone"
                          className="form-label fw-bold"
                        >
                          phone:
                        </label>
                        <input
                          type="text"
                          name="mobile"
                          {...register("mobile")}
                          placeholder="enter your Phone Number"
                          className="form-control ms-2"
                          id="exampleInputphone"
                        />
                      </div>
                    </div>

                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center">
                        <label
                          htmlFor="exampleInputaddress"
                          className="form-label fw-bold"
                        >
                          Address:
                        </label>
                        <input
                          type="text"
                          name="address"
                          {...register("address")}
                          placeholder="enter your address"
                          className="form-control ms-2"
                          id="exampleInputaddress"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center">
                        <label
                          htmlFor="exampleInputdesignation"
                          className="form-label fw-bold"
                        >
                          Designation:
                        </label>
                        <input
                          type="text"
                          name="designation"
                          {...register("designation")}
                          placeholder="enter your Dasignation"
                          className="form-control ms-2"
                          id="exampleInputdesignation"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className=" d-flex align-items-center">
                        <label
                          htmlFor="exampleInputcompany"
                          className="form-label fw-bold"
                        >
                          Company:
                        </label>
                        <input
                          type="text"
                          name="company"
                          {...register("company")}
                          placeholder="enter your Company Name"
                          className="form-control ms-2"
                          id="exampleInputcompany"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-end me-4">
                    <button className="btn btn-primary px-5" type="submit">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;

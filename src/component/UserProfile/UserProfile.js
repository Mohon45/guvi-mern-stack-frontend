import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import userAvater from "../../images/userAvater.png";
import logout from "../Authentication/LogOut/LogOut";

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  const email = JSON.parse(localStorage.getItem("userEmail"));
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/v1/user/${email}`)
      .then((res) => {
        if (res.status === 200) {
          setUserData(res.data.result[0]);
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something Went Wrong! Try again letter!");
      });
  }, [email]);

  const logOut = () => {
    logout();
    navigate("/");
    toast.success("Log Out Success");
  };
  return (
    <div>
      {email ? (
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
            <div className="row">
              <div className="col-md-5 my-5 pt-5">
                <div className="left-side-dashboard">
                  <img
                    style={{ width: "200px" }}
                    src={userAvater}
                    alt="avater"
                  />

                  <div className="mt-3">
                    <h3>
                      <span className="fw-bold">Name:</span> {userData.name}
                    </h3>
                    <h5 className="mt-3">
                      <span className="fw-bold">Title: </span> {userData.title}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-7 right-side-dashboard mt-5 pt-5">
                <div className="row">
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Email: </span>
                      {userData.email}
                    </p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Age: </span>
                      {userData.age} Years
                    </p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Birthday: </span>
                      {userData.dob}
                    </p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Gender: </span>
                      {userData.gender === "male" ? <>Male</> : <>Female</>}
                    </p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Phone: </span>
                      {userData.mobile}
                    </p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Address: </span>
                      {userData.address}
                    </p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Designation: </span>
                      {userData.designation}
                    </p>
                  </div>
                  <div className="col-md-6 mb-5">
                    <p>
                      <span className="fw-bold">Company: </span>
                      {userData.company}
                    </p>
                  </div>
                </div>
                <div className="text-end me-4 pb-3">
                  <button
                    onClick={() => {
                      navigate(`/user-profile/edit/${userData.email}`);
                    }}
                    style={{ fontSize: "1.2rem" }}
                    className="btn btn-primary px-5"
                    type="submit"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default UserProfile;

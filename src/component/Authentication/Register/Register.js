import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../../shared/Loader/Loader";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoading(true);
    if (data.password === data.password2) {
      axios
        .post(
          "https://obscure-anchorage-80686.herokuapp.com/api/v1/user/signup",
          data,
          {
            headers: { "content-type": "application/json" },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Registration SuccessFully Done!");
            navigate("/");
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.message);
          toast.error("Something Wrong! Try Again latter!");
          setLoading(false);
        });
    } else {
      toast.error("Password do not Match. Try Again!");
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="card sign-in-box mx-auto mt-5"
          style={{ width: "35rem", height: "80vh" }}
        >
          <div className="card-body">
            <h2 className="text-center fw-bold">Registration</h2>
            <div className="w-75 mx-auto mt-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputName"
                    className="form-label fw-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    placeholder="enter your name"
                    className="form-control"
                    id="exampleInputName"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fw-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="enter your email id"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fw-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="enter your password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword2"
                    className="form-label fw-bold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    {...register("password2")}
                    placeholder="retype your password"
                    className="form-control"
                    id="exampleInputPassword2"
                  />
                </div>
                <Link style={{ textDecoration: "none" }} to="/">
                  Already Registered? Please Logins
                </Link>
                <div className="mb-3 text-center mt-5">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios  from 'axios';
import toast from "react-hot-toast";
import "./../../Componant/login/login.css"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Loggedin Successfully!');
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div class="container8">
      <div class="modal-dialog">
        <div class="modal-content">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
             <Link
              type='button'
                to="/"
                className="btn5"
              >
                ✕
              </Link>
             

            <h3 class="font-login">Login</h3>
            {/* Email */}
            <div class="mt-4">
              <span class="email-heading">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                class="form-control"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span class="text-sm text-danger">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div class="mt-4">
              <span class="email-heading">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                class="form-control"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span class="text-sm text-danger">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div class="d-flex justify-content-between mt-4">
              <button class="btn6">
                Login
              </button>
              <p class="mt-2 me-5">
                Not registered?{" "}
                <Link to="/signup" class="">
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

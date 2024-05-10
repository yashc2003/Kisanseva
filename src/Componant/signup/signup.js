import React from 'react';
import { Link } from 'react-router-dom';
import Login from './../login/login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import "./../../Componant/signup/signup.css"
function Signup() {
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
      .post('http://localhost:4001/user/signup', userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup Successfully created!');
        }
        localStorage.setItem('users', JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error('Error: ' + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container8">
        <div className="">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
              type='button'
                to="/"
                className="btn5"
              >
                ✕
              </Link>
              
              <h3 className="font-login">Signup</h3>
              <div className="mt-4">
                <label htmlFor="fullname" className="email-heading">
                  Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="form-control"
                  placeholder="Enter your fullname"
                  {...register('fullname', { required: true })}
                />
                {errors.fullname && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="email-heading">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="email-heading">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="d-flex justify-content-between mt-4 me-5">
                <button className="btn7">Signup</button>
                <p className="">
                  Have an account?{' '}
                  
                  <Link to="/login" className="">
                  login
                </Link>{" "}
                
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

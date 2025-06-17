import React, { createContext, useEffect, useState } from "react";
import Header from "../Helpers/Header";
import axios from "axios";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";
import EditProfile from "../Helpers/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { editForm } from "../Redux/EditSlice";
import bcrypt from "bcryptjs";

export const loginContext = createContext();
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = { Id: "", email: "", password: "" };
  const [loginData, setLoginData] = useState(initialState);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});
  const registerData = useSelector((state) => state?.register?.register )
  console.log(registerData, 'regis')

  useEffect(() => {
    axios.get("http://localhost:5500/users/login").then((response) => {
      // console.log(response, 'response')
      // let data = Object.values(response.data);
      // console.log(data,'rrr')
      // let list =[]
      // data.map(key => list.push(data))
      setData(response?.data?.users);
      // console.log(response?.data?.users , "data response from firebase")
    });
  }, []);

  const handleData = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const checkData = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch('http://localhost:5500/users/login')
      const result = await res.json()
      setData(res)
      if (validateForm()) {
        const itemExist = result?.users?.findIndex(
          (item) => item.email === loginData.email
        );
        console.log( loginData, result, itemExist, 'hashed')
        if (itemExist > -1) {
          if (
            result?.users[itemExist].email === loginData.email &&
            result?.users[itemExist].password === loginData.password
          ) {
            setFlag(true);
            alert("You are logged in successfully");
            dispatch(editForm(result?.users[itemExist]));
            setLoginData(initialState);
            navigate("/home");
            console.log(flag, "flag");
          } else {
            alert("Password Wrong, please enter correct password");
          }
        } else {
          alert("You are new user so, register please");
        }
      }
    } catch (error) {
      console.log(error, "Error");
    }
    //console.log(flag,'flag')
  };
  const hideErrors = (event) => {
    setLoginErrors({
      ...loginErrors,
      [event.target.name]: "",
    });
  };

  const checkErrors = (event) => {
    if (event.target.value === "") {
      setLoginErrors({
        ...loginErrors,
        [event.target.name]: "Enter " + event.target.name,
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};
    if (loginData.email === "") {
      errors.email = "Enter email to login";
      isValid = false;
    }
    if (loginData.password === "") {
      errors.password = "Enter password to login";
      isValid = false;
    }
    setLoginErrors(errors);
    return isValid;
  };
  //console.log(myId,'outside')
  return (
    <React.Fragment>
      <figure className="text-center">
        <blockquote className="blockquote">
          <h1 className="fw-bold" style={{ color: "blue" }}>
            Crypto Clash
          </h1>
        </blockquote>
        <figcaption className="blockquote-footer ms-5" style={{ color: "red" }}>
          A platform of war of{" "}
          <cite title="Source Title">Digital Currencies</cite>
        </figcaption>
        <p>
          Most popular crypto app in World and one of the best crypto apps for
          beginners.
        </p>
      </figure>
      <article className="container bg-info-subtle my-4 p-3 rounded-2 login_form">
        <h3 className="text-center">Login</h3>
        <form onSubmit={checkData}>
          <section className="form-group my-1">
            <label className="fs-5">Email : </label>
            <input
              type="text"
              onChange={handleData}
              name="email"
              onFocus={hideErrors}
              onBlur={checkErrors}
              className="form-control"
              value={loginData.email}
            />
            {loginErrors.email ? (
              <small className="text-danger">{loginErrors.email}</small>
            ) : null}
          </section>

          {/* Password field */}
          <section className="form-group my-1">
            <label className="fs-5">Password : </label>
            <input
              type="password"
              onChange={handleData}
              onFocus={hideErrors}
              onBlur={checkErrors}
              name="password"
              className="form-control"
              value={loginData.password}
            />
            {loginErrors.password ? (
              <small className="text-danger">{loginErrors.password}</small>
            ) : null}
          </section>

          {/* Submit Button */}
          <section className="form-group my-1 text-center">
            <input
              type="submit"
              className="btn btn-primary my-2 px-3 py-2"
              value="Login"
            />
          </section>

          <section className="form-group my-1 text-center">
            <h6>Or</h6>
            <Link className="btn btn-success" to="/">
              Register
            </Link>
          </section>
        </form>
      </article>
    </React.Fragment>
  );
};
//export {demoId}
export default Login;

import React, { useState } from "react";
import Header from "../Helpers/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerForm } from "../Redux/RegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import bcrypt from "bcryptjs";
import { editForm } from "../Redux/EditSlice";

const Register = () => {
  // const id = Math.floor(Math.random() * 100);
  const initialState = {
    Id: 0,
    username: "",
    email: "",
    password: "",
    gender: "",
    terms: "",
    hobbies: [],
    state: "",
    address: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  // const data = useSelector((state) => )
  const registerData = useSelector((state) => state?.register?.register )
  const [handlePassword, setHandlePassword] = useState(true);

  const handleInputs = (event) => {
    if (event.target.name === "terms") {
      setFormData({
        ...formData,
        terms: event.target.checked ? event.target.value : "",
      });
    } else if (event.target.name === "hobbies") {
      const itemExists = formData.hobbies.indexOf(event.target.value);
      if (itemExists > -1) {
        formData.hobbies.splice(itemExists, 1);
      } else {
        formData.hobbies.push(event.target.value);
      }
      setFormData({
        ...formData,
        hobbies: formData.hobbies,
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    let myForm = event.target;
    event.preventDefault();
    if (validateForm()) {
      try {
        console.log(formData);
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        console.log(hashedPassword, 'hashed')

        // Replace the plain password with the hashed password
        const formDataWithHashedPassword = {
          ...formData,
          Id: registerData?.length + 1
          // password: hashedPassword,
        };
        const apiurl = "http://localhost:5500/users/register";
        const response = await fetch(apiurl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithHashedPassword),
        })
        if(!response.ok) {
          throw new Error("Failed to register user");
        }
        const responseData = await response.json();
        console.log("Response from server:", responseData);
        // .then((response) => {
        //   alert("Submitted successfully");
        //   console.log(response?.data, 'response')
        //   setFormData(initialState);
        //   myForm.reset();
        // });
        // axios.post('https://localhost:5500/users/register',formData).then(() => {
        //   alert("Submitted successfully")
        //   setFormData(initialState)
        //   myForm.reset();
        // })
        if (responseData.users) {
          console.log("Users list:", responseData.users);
          alert("Registration successful! Users data fetched.");
        }
  
        // Reset form
        setFormData(initialState);
        myForm.reset();
        dispatch(registerForm(responseData?.users));
        dispatch(editForm(formDataWithHashedPassword));
        navigate("/home");
        //console.log()
      } catch (error) {
        console.log("Error encrypting Password", error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Username Validation //
    if (formData.username === "") {
      errors.username = "Enter Username";
      isValid = false;
    } else {
      if (formData.username.length < 4 || formData.username.length > 20) {
        errors.username = "Username length should between 4 and 20 only";
        isValid = false;
      }
    }

    // Email Validation //
    if (formData.email === "") {
      errors.email = "Enter Email";
      isValid = false;
    } else {
      if (!isValidEmail(formData.email)) {
        errors.email = "Please Enter Valid Email";
        isValid = false;
      }
    }

    //Password Validation//
    if (formData.password === "") {
      errors.password = "Enter Password";
      isValid = false;
    } else {
      if (!isValidPassword(formData.password)) {
        errors.password =
          "Password should contain atleast one lowercase, one uppercase, one special character with min length 8.";
        isValid = false;
      }
    }

    //Gender validation
    if (formData.gender === "") {
      errors.gender = "Please Select Gender";
      isValid = false;
    }

    // Hobbies validation
    if (formData.hobbies.length <= 0) {
      errors.hobbies = "Please select atleast one Hobbie.";
      isValid = false;
    }

    //Terms and Conditions
    if (formData.terms === "") {
      errors.terms = "Please accept the Terms and Conditions";
      isValid = false;
    }

    //Select State
    if (formData.state === "") {
      errors.state = "Please select your State";
      isValid = false;
    }

    //Address //
    if (formData.address === "") {
      errors.address = "Please Enter your address";
      isValid = false;
    }

    // Setting Errors
    setFormErrors(errors);

    return isValid;
  };

  // Onfocus Hide Errors
  const hideErrors = (event) => {
    setFormErrors({
      ...formErrors,
      [event.target.name]: "",
    });
  };

  // OnBlur Check Errors
  const checkErrors = (event) => {
    if (event.target.value === "") {
      setFormErrors({
        ...formErrors,
        [event.target.name]: "Enter " + event.target.name,
      });
    }
  };

  // Email Validation//
  const isValidEmail = (email) => {
    var filter =
      /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(email).search(filter) != -1;
  };

  // Password Validation//
  const isValidPassword = (pass) => {
    var filter =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return String(pass).search(filter) != -1;
  };
  const handleShowPassword = () => {
    console.log(handlePassword, "cc");
    if (formData.password.length > 0) {
      document.getElementById("PassWord").type = "text";
      setHandlePassword(!handlePassword);
    }
  };
  const handleHidePassword = () => {
    console.log(handlePassword, "ooo");
    if (formData.password.length > 0) {
      document.getElementById("PassWord").type = "password";
      setHandlePassword(!handlePassword);
    }
  };
  return (
    <React.Fragment>
      <figure class="text-center">
        <blockquote class="blockquote">
          <h1 className="fw-bold" style={{ color: "blue" }}>
            Crypto Clash
          </h1>
        </blockquote>
        <figcaption class="blockquote-footer ms-5" style={{ color: "red" }}>
          A platform of war of{" "}
          <cite title="Source Title">Digital Currencies</cite>
        </figcaption>
        <p>
          Most popular crypto app in World and one of the best crypto apps for
          beginners.
        </p>
      </figure>
      <article className="container bg-info-subtle my-4 p-3 rounded-2 register_form">
        <h3 className="text-center">Let's Register</h3>
        <form onSubmit={handleSubmit}>
          {/* Username Input field */}

          <section className="form-group my-1">
            <label className="fs-5">Username : </label>
            <input
              type="text"
              name="username"
              onChange={handleInputs}
              onFocus={hideErrors}
              onBlur={checkErrors}
              className="form-control"
              value={formData.username}
            />
            {formErrors.username ? (
              <small className="text-danger">{formErrors.username}</small>
            ) : null}
          </section>

          {/* Email field*/}
          <section className="form-group my-1">
            <label className="fs-5">Email : </label>
            <input
              type="text"
              name="email"
              onChange={handleInputs}
              onFocus={hideErrors}
              onBlur={checkErrors}
              className="form-control"
              value={formData.email}
            />
            {formErrors.email ? (
              <small className="text-danger">{formErrors.email}</small>
            ) : null}
          </section>

          {/* Password field */}
          <section className="form-group my-1" id="passMain">
            <label className="fs-5">Password : </label>
            <input
              type="password"
              name="password"
              id="PassWord"
              onChange={handleInputs}
              onFocus={hideErrors}
              onBlur={checkErrors}
              className="form-control"
              value={formData.password}
            />
            {handlePassword ? (
              <i
                class="fa fa-eye"
                aria-hidden="true"
                id="eyeOpen"
                onClick={handleShowPassword}
              ></i>
            ) : (
              <i
                class="fa fa-eye-slash"
                aria-hidden="true"
                id="eyeClose"
                onClick={handleHidePassword}
              ></i>
            )}
            {formErrors.password ? (
              <small className="text-danger">{formErrors.password}</small>
            ) : null}
          </section>

          {/* Gender field */}
          <section className="form-group my-1">
            <label className="fs-5">Gender : </label>
            <br />
            <label className="mx-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleInputs}
              />
              Male
            </label>
            <label className="mx-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleInputs}
              />
              Female
            </label>
            {formErrors.gender ? (
              <p>
                <small className="text-danger">{formErrors.gender}</small>
              </p>
            ) : null}
          </section>

          {/* Selecting State Starts*/}

          <section className="form-group my-1">
            <label className="fs-5">State : </label>
            <select
              className="form-select"
              name="state"
              onChange={handleInputs}
            >
              <option value="">--Select State--</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            {formErrors.state ? (
              <small className="text-danger">{formErrors.state}</small>
            ) : null}
          </section>

          {/* Selecting States Ends */}

          {/* Address field */}

          <section className="form-group my-1">
            <label className="fs-5">Address : </label>
            <textarea
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleInputs}
            ></textarea>
            {formErrors.address ? (
              <small className="text-danger">{formErrors.address}</small>
            ) : null}
          </section>

          {/* Hobbies field */}
          <section className="form-group my-1">
            <label className="fs-5">Hobbies : </label>
            <br />
            <label className="mx-1">
              <input
                type="checkbox"
                name="hobbies"
                value="Reading"
                onChange={handleInputs}
              />
              Reading
            </label>
            <br />
            <label className="mx-1">
              <input
                type="checkbox"
                name="hobbies"
                value="Cooking"
                onChange={handleInputs}
              />
              Cooking
            </label>
            <br />
            <label className="mx-1">
              <input
                type="checkbox"
                name="hobbies"
                value="Sleeping"
                onChange={handleInputs}
              />
              Sleeping
            </label>
            <br />
            <label className="mx-1">
              <input
                type="checkbox"
                name="hobbies"
                value="Singing"
                onChange={handleInputs}
              />
              Singing
            </label>
            <br />
            <label className="mx-1">
              <input
                type="checkbox"
                name="hobbies"
                value="Dancing"
                onChange={handleInputs}
              />
              Dancing
            </label>
            <br />
            {formErrors.hobbies ? (
              <p>
                <small className="text-danger">{formErrors.hobbies}</small>
              </p>
            ) : null}
          </section>

          {/* Terms and Conditions field*/}
          <section className="form-group my-1">
            <label className="fs-5">Terms and Conditions : </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="terms"
                value="accepted"
                onChange={handleInputs}
              />
              Accept the Terms and Conditions
            </label>
            {formErrors.terms ? (
              <p>
                <small className="text-danger">{formErrors.terms}</small>
              </p>
            ) : null}
          </section>

          {/* Submit Button */}
          <section className="form-group my-1 text-center">
            <input
              type="submit"
              className="btn btn-success py-2 px-3 my-2"
              value="Submit"
            />
          </section>

          <section className="form-group my-1 text-center">
            <h6>Or</h6>
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </section>
        </form>
      </article>
    </React.Fragment>
  );
};

export default Register;

import axios from 'axios';
import React from 'react';
import { useRef , useState } from "react";
import { useNavigate } from 'react-router-dom';
import classes from './Register.module.css';

export default function Register() {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const contactNumberInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const navigate = useNavigate();


  const submitHandler = async (event) => {
    event.preventDefault();
    const LoginId = usernameInputRef.current.value;
    const Email = emailInputRef.current.value;
    const Password = passwordInputRef.current.value;
    const FirstName = firstNameInputRef.current.value;
    const LastName = lastNameInputRef.current.value;
    const ContactNo = contactNumberInputRef.current.value;

    if(confirmPasswordInputRef.current.value !== passwordInputRef.current.value){
      passwordInputRef.current.setCustomValidity("Password don't match");
    }else{
      const user = { LoginId,Email,FirstName,LastName,Password,ContactNo
      };
      try {
        await axios.post("http://localhost:5010/tweets/register",user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }}
    }
    
    const onLogin = (e) =>{
      e.preventDefault();
      navigate("/login");
  }

    

    //Add validation
    /* setIsLoading(true);
    fetch("http://localhost:5010/tweets/register", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        console.log(res.token.message);
      } else {
        return res.json().then((data) => {
            let errorMessage = 'Registration Failed';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
        });
      }
    }); */
  

  return (
    <div className={classes.register}>
      <div className={classes.registerWrapper}>
        <div className={classes.registerLeft}>
          <h3 className={classes.registerLogo}>Tweet App</h3>
          <span className={classes.registerDesc}>
            Connect with friends and the world around you on Tweet App.
          </span>
        </div>
        <div className={classes.registerRight}>
        
          <form className={classes.registerBox} onSubmit={submitHandler}>
          {/* <label htmlFor="username">Username</label> */}
              <input
              placeholder='Username'
                type="text"
                id="username"
                required
                ref={usernameInputRef}
                className={classes.registerInput}
              />
            {/* <label htmlFor="email">Email</label> */}
              <input
              placeholder='Email'
                type="email"
                id="email"
                required
                ref={emailInputRef}
                className={classes.registerInput}
              />
              {/* <label htmlFor="firstname">First Name</label> */}
              <input
              placeholder='First Name'
                type="string"
                id="firstname"
                required
                ref={firstNameInputRef}
                className={classes.registerInput}
              />
              {/* <label htmlFor="lastname">Last Name</label> */}
              <input
              placeholder='Last Name'
                type="text"
                id="lastname"
                required
                ref={lastNameInputRef}
                className={classes.registerInput}
              />
              {/* <label htmlFor="contactnumber">Contact number</label> */}
              <input
              placeholder='Contact number'
                type="number"
                id="contactnumber"
                required
                ref={contactNumberInputRef}
                className={classes.registerInput}
              />
           {/* <label htmlFor="password">Password</label> */}
              <input
              placeholder='Password'
                type="password"
                id="password"
                required
                ref={passwordInputRef}
                className={classes.registerInput}
                minLength='8'
              />
           {/* <label htmlFor="password">Confirm Password</label> */}
              <input
              placeholder='Confirm Password'
                type="password"
                id="confirmpassword"
                required
                ref={confirmPasswordInputRef}
                className={classes.registerInput}
                minLength='8'
              />
            <button className={classes.registerButton} type='submit'>Sign Up</button>
            <button className={classes.registerRegisterButton} onClick={onLogin}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
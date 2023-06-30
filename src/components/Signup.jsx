import React, { useState } from "react";
import Logo from "../assets/Group 433.png";

const Signup = (props) => {

  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }


  return (
    <div className="register_form">
      <div className="form">
        <div className="top">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="register_page">
            <span>You have an account?</span>
            <button onClick={() => props.onFormSwitch("login")}>Log in!</button>
          </div>
        </div>
        <div className="form_page">
          <h2>Sign Up</h2>
          <form className="form_layout" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) =>setName(e.target.value)} value={name} id="name" name="name" placeholder="Full name" />
            <input type="email" onChange={(e) =>setEmail(e.target.value)} value={email} id="email" name="email" placeholder="Email" />
            <input type="password" onChange={(e) =>setPassword(e.target.value)} value={password} id="password" name="password" placeholder="Password" />
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

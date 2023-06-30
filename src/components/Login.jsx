import React, { useState } from "react";
import Logo from "../assets/Group 433.png";

const Login = (props) => {

  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <span>Don't have an account?</span>
            <button onClick={() => props.onFormSwitch("signup")}>Sign up!</button>
          </div>
        </div>
        <div className="form_page">
          <h2>Login</h2>
          <form className="form_layout" onSubmit={handleSubmit}>
            <input type="email" onChange={(e) =>setEmail(e.target.value)} value={email} id="email" name="email" placeholder="Email" />
            <input type="password" onChange={(e) =>setPassword(e.target.value)} value={password} id="password" name="password" placeholder="Password" />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

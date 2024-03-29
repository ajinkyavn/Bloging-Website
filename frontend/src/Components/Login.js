import React, { useState } from "react";
import Axios from "axios";
import '../css/Login.css'
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); 
    const setData = useState();  
      const loginUser = async (username, password) => {
        try {
          const response = await Axios.post("http://localhost:5000/login", {
            username,
            password
          });
          setData(String(response.data));
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" method="post" action="http://localhost:5000/login" onSubmit={loginUser}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </>
    )
}
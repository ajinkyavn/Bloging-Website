import React, { useState } from "react";
import Axios from "axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const setData = useState();
    const registerUser = async (username, password) => {
        try {
          const response = await Axios.post("http://localhost:5000/register", {
            username,
            email,
            password
          });
          setData(String(response.data));
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" method="post" action="http://localhost:5000/register" onSubmit={registerUser}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
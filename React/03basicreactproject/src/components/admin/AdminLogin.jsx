import '../../styles/AdminLogin.css'

import { Link } from "react-router-dom";
import { useState } from "react";


import { toast } from "react-toastify";

const AdminLogin = () => {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    console.log(username);
    console.log(password);
    function validLogin(e) {
        e.preventDefault();
        if(username === "nandan@gmail.com" && password === "nandan"){
            toast.success("Login Success")
        }else{
            toast.error("Invalid Credential")
        }
           
    }
    return (
        <>
            <div className="admin-login">
                <label htmlFor="username">Enter username</label>
                <input onChange={(e)=>{
                    setUsername(e.target.value);

                }} type="text" id="username" value={username} placeholder="Enter username" />
                <br />

                <label htmlFor="password">Enter password</label>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" id="password" value={password} placeholder="Enter password" />
                <br />
                <button onClick={validLogin} className='admin-btn'>Login</button>
                <div className="signup-link">
                <p>Don't have an account?</p>
                <Link to="/adminRegister">
                    <span>Sign Up</span>
                </Link>
            </div>
            </div>

            
        </>
    );
};

export default AdminLogin;

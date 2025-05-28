import axios from "axios"
import '../../styles/AdminLogin.css'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [admindata, setAdmindata] = useState([])
    console.log(username);
    console.log(password);
    useEffect(() => {
        axios.get("http://localhost:3030/Admin")
            .then((res) => {
                console.log(res.data);
                setAdmindata(res.data);

            }).catch((err) => {
                console.log(err);
                toast.error("unable to Fetch")
            })
    }, []);
    console.log(admindata);
    
    const navigate = useNavigate();
    function validLogin(e) {
        e.preventDefault();
        let isPresent = admindata.filter((dataadmin) => {
            return dataadmin.username === username && dataadmin.password === password;
        });

        console.log(isPresent);
        if (isPresent.length > 0) {
            toast.success("Login Succesfull")
            navigate('/adminhomepage')
            
        } else {
            toast.error("Invalid credential")
        }

    }

    return (
        <>
            <div className="admin-login">
                <form  onSubmit={validLogin}  action="">
                    <label htmlFor="username">Enter username</label>
                <input onChange={(e) => {
                    setUsername(e.target.value);

                }} type="text" id="username" value={username} placeholder="Enter username" />
                <br />

                <label htmlFor="password">Enter password</label>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" id="password" value={password} placeholder="Enter password" />
                <br />
                <button className='admin-btn'>Login</button>
                </form>
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

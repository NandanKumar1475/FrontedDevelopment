import axios from "axios"
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const AdminRegister = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[re_password,setRe_password] = useState("")
    const[phone,setPhone] = useState("")
    const[address,setAddress] = useState("")

    const payload  = {
        name,email,username,password,re_password,phone,address
    }
    function add_Admin(e){
        e.preventDefault()
        axios.post("http://localhost:3030/Admin" ,payload)
        .then((res)=>{
            console.log(res);
            toast.success("Admin added succesfully")
        })
        .catch((err)=>{
            console.log(err);
            toast.error("unable to add data")
            
        })

    }
    return (
        <>
            <div className="admin-register">
                <h1>Welcome to user Registration </h1>
                <form  onSubmit={add_Admin} action="" className="form">
                    <label>Name:</label>
                    <input value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} type="text" placeholder="Enter Your Name" required />
                    <br />

                    <label>Email:</label>
                    <input value={email}  onChange={(e)=>{
                        setEmail(e.target.value)
                    }} type="email" placeholder="Enter your Email" required/>
                    <br />

                    <label>username:</label>
                    <input value={username} onChange={(e)=>{
                        setUsername(e.target.value)
                    }} type="text" placeholder="Enter your Username" required/>
                    <br />

                    <label>password:</label>
                    <input value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}  type="password" placeholder="password" required />
                    <br />

                    <label>Confirm password:</label>
                    <input value={re_password} onChange={(e)=>{
                        setRe_password(e.target.value)
                    }} type="password" placeholder="Enter your password" required />
                    <br />

                    <label>Number:</label>
                    <input type="tel" value={phone} onChange={(e)=>{
                        setPhone(e.target.value)
                    }} pattern="[0-9]+{10}"  placeholder="Enter your Number" required/>
                    <br />
                    <label>Address:</label>
                    <input value={address} onChange={(e)=>{
                        setAddress(e.target.value)
                    }} type="text" placeholder="Address" />

                    <button type="submit">Sign Up</button>
                </form>
                
                <br />
                <span>Already Account login here</span>
                <Link to='/adminlogin'>
                   <h2>Login</h2>
                </Link>


            </div>

        </>
    );
}

export default AdminRegister;
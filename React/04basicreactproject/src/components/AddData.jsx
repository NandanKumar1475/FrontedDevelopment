import axios from 'axios';
import {toast} from 'react-toastify'
import Footer from "./Footer"
import Navbar from "./Navbar"
import '../styles/AddData.css'
import { useState } from "react"

const AddData = ()=>{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[address,setAddress] = useState("");
    const[password,setPassword] = useState("");

    const payload = {
        name,email,phone,address,password
    }

    const registerStudent = async (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3030/Student" ,payload)
        .then((res)=>{
            console.log(res);
            toast.success("Student Registration Succesfully") 
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setPassword("");
        })
        .catch((err) =>{
            console.log(err);
            toast.error("unable to add data")
            
        })
        

    }


    return(

        <>
        <Navbar></Navbar>
        <h1>Welocome To student Registration </h1>
        <div className="add-data">
            <div className="left-add-data">
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20240106/pngtree-web-ui-ux-design-and-coding-development-concept-illustration-vector-image_15575159.jpg" alt="home-png" />
        </div>
        <div className="reg-form">
            <form onSubmit={registerStudent} action="" >
                <label htmlFor="name">
                    Name:-
                </label>
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }} placeholder="Enter your name"  required/>

                <label htmlFor="phone">
                    Phone:-
                </label>
                <input type="tel" value={phone} onChange={(e)=>{
                    setPhone(e.target.value)
                }} pattern="[0-9]{10}" placeholder="Enter your phone" required />

                <label htmlFor="Email">
                     Email:-
                </label>
                <input type="email" value={email}  onChange={(e)=>{
                    setEmail(e.target.value)
                }} placeholder="Enter your Email" required />

                <label htmlFor="Address">
                    Address:-
                </label>
                <input type="text" value={address} onChange={(e)=>{
                    setAddress(e.target.value)
                }} placeholder="Enter your Address"  required />

                <label htmlFor="password">
                    Password:-
                </label>
                <input type="password" value={password}  onChange={(e)=>{
                    setPassword(e.target.value)
                }} placeholder="Enter your password"  required/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default AddData
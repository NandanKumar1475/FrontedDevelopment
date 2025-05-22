import { Link } from "react-router-dom";
const AdminRegister = () => {
    return (
        <>
            <div className="admin-register">
                <h1>Welcome to user Registration </h1>
                <form action="" className="form">
                    <label>Name:</label>
                    <input type="text" placeholder="Enter Your Name" required />
                    <br />
                    <label>Email:</label>
                    <input type="text" placeholder="Enter your Email" required/>
                    <br />
                    <label>username:</label>
                    <input type="text" placeholder="Enter your Username" required/>
                    <br />
                    <label>password:</label>
                    <input type="password" placeholder="password" required />
                    <br />
                    <label>Confirm password:</label>
                    <input type="password" placeholder="Enter your password" required />
                    <br />
                    <label>Number:</label>
                    <input type="text" placeholder="Enter your Number" required/>
                    <br />
                    <label>Address:</label>
                    <input type="text" placeholder="Address" />
                </form>
                <button>SingUp</button>
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
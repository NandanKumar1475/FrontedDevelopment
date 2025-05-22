import { Link } from "react-router-dom";

const AdminLogin = () => {
    return (
        <>
            <div className="admin-login">
                <label htmlFor="username">Enter username</label>
                <input type="text" id="username" placeholder="Enter username" />
                <br />
                <label htmlFor="password">Enter password</label>
                <input type="password" id="password" placeholder="Enter password" />
                <br />
                <button>Login</button>
            </div>

            <div className="signup-link">
                <p>Don't have an account?</p>
                <Link to="/adminRegister">
                    <span>Sign Up</span>
                </Link>
            </div>
        </>
    );
};

export default AdminLogin;

import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <Link to="/homepage">
                       <span>Home</span>
                    </Link>
                    <Link to="/adddata">
                    <span>AddData</span>
                </Link>
                <Link to="/service">
                    <span>Service</span>
                </Link>
                <Link to="/studentdetails">
                    <span>All student Details</span>
                </Link>
                <Link to="/about">
                    <span>About</span>
                </Link>
                <Link to="/signUp">
                    <span>Signup</span>
                </Link>
                <Link to="/Login">
                    <span>Login</span>
                </Link>
                </ul>
            </div>

        </>
    )
}
export default Navbar
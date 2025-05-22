import { Link } from "react-router-dom";
import '../styles/LandingPage.css'
const LandingPage = () => {
    return ( 
        <>
        <h1>Welcome to Ecommerce </h1>
        <div className="Landing-page">

            {/* admin  */}

           <div className="admin">
             <Link to='/adminlogin'>
             <img src="https://static.vecteezy.com/system/resources/previews/016/273/514/non_2x/personal-icon-free-vector.jpg" alt="user-login" />
            <h3>Admin-login</h3>
            
            </Link>
           </div>

            {/* user  */}
           <div className="user">
             <Link to='/userlogin'>
             <img src=  "https://media.istockphoto.com/id/489898190/vector/businessman-icon-on-a-round-button-simple-series.jpg?s=612x612&w=0&k=20&c=tXUksi8m2lu-pB5mGw37KQgE2AJGjFYIcSo9D782fic=" alt="user-login" />
            <h3>user-login</h3>
            
            </Link>
           </div>

        </div>

        
        
        </>
     );
}
 
export default LandingPage;
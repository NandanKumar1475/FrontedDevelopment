import { Link } from "react-router-dom";
import '../../styles/Navbar.css'
const Navbars = () => {
  return ( 
    <>
     <div className="navbar">
        <div className="logo">
           <h1>Nandan <i>Kart</i></h1>
        </div>
        <div className="links">
           <Link to='/adminhomepage/addproduct'> 
              <span>AdminHome</span>
           </Link>
           <Link to='/logout'>
            <span>Logout</span>
           </Link>
        </div>
     </div>
    </>
   );
}
 
export default Navbars;
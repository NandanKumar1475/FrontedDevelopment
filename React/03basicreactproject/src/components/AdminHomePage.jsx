import Navbars from "./Navbars/Navbars";
import { Routes,Route } from "react-router-dom";
import AddProducts from "./admin/AddProducts";
const AdminHomePage = () => {
    return ( 
        <>
        <h1>
            <Navbars></Navbars>
            <Routes>
                <Route path='/addproduct' element = {<AddProducts></AddProducts>}/>
            </Routes>
        </h1>
        
        </>
     );
}
 
export default AdminHomePage;
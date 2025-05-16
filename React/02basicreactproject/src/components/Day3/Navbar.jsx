import '../Style/Navbar.css'
const Navbar = ()=>{
    return(
        <>
         <div className="navbar">
            <div className="logo">
                <h1>Jsp <span>kart</span></h1>
            </div>
            <div className="search">
                <input type="text" name="" id="search" placeholder="Enter to Search"/>
            </div>
            <div className="link">
                <a href="#">Login</a>
                <a href="#">Account</a>
            </div>
         </div>
        </>
    )
}
export default Navbar
import '../styles/Home.css'
import Footer from './Footer'
import Navbar from './Navbar'
const Home = ()=>{
    return(
        <>
        <Navbar></Navbar>
        <div className="homeage">
            <div className="lefthome">
                <h1>Enable learning mangement System </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis nostrum vitae beatae voluptate exercitationem odio nobis tenetur eum quae itaque.</p>
                <button className='left-btn'>Get in touch</button>

            </div>
            <div className="righthome">
                <div className="box box1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minima!</p>
                </div>
                <div className="box box2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, odio.</p>
                </div>
                <div className="box box3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, nobis.
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default Home
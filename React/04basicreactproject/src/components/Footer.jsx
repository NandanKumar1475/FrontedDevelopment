import '../styles/Footer.css'

const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="left-footer">
                <img src="https://cdn-icons-png.freepik.com/256/4138/4138124.png?semt=ais_hybrid" alt="insta" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBKsVy8QSdQz5XwYxnhUtNwyorph8M9n-vQ&s" alt="facebook" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJGaR_uW64_qK6pW7MwlHbDJc7rujJbbXPQ&s" alt="twitter" />
                <img src="https://cdn-icons-png.flaticon.com/512/226/226236.png" alt="youtube" />
                
            </div>
            <div className="right-footer">
                <div className="service">
                    <h1>Service</h1>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sequi!</span>
                </div>
                <div className="blog">
                    <h1>blog</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, necessitatibus.\</span>

                </div>
                <div className="products">
                    <h1>products</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, libero.</p>
                </div>

            </div>
        </div>
        
        
        
        </>
    )

}
export default Footer
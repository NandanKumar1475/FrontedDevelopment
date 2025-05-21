
const Whatsapp = (props)=>{
    const like = props.data.like;
    const setLike = () =>{
        props.data.setLike(like + 2);
    
    }

    return(
        <>
        <h1>Whatsapp</h1>
        <h2>Whatsapp post 1</h2>
        <h1>The like : {like}</h1>
        <button onClick={setLike}>like</button>  
        </>
    )

}
export default Whatsapp
import { useState } from "react"
const Bank = ()=>{
    let[counts,setCount] = useState(0);
    console.log(counts);

    function incre() {
        setCount(++counts)
        
    }
    return(
        <>
        <div className="bank">
            <button onClick={incre}>Incremnt</button>
            <h1>The value of count is := {counts}</h1>

        </div>
        
        </>
    )
    

}
export default Bank;
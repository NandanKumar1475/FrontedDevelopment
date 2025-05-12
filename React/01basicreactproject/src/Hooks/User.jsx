import { useState,useEffect } from "react";

function Products(){
    let[user,setUser] = useState([]);
    let[count,setCount] = useState(0);
    let[count1,setCount1] = useState(0);

    useEffect(()=>{
        async function fetchData() {
            try {
                let res = await fetch("https://jsonplaceholder.typicode.com/users")
                let userData = await res.json();
                setUser(userData);
            } catch (e) {
                console.log(e);   
            }
      
        }

        fetchData();
        
    },[])
    console.log(user)
    function incre(){
        setCount(++count)

    }

    function increment(){
        setCount1(++count1)

    }

   return(
    <>
    <h1>Users data </h1>

    <br/>
    <button onClick={incre}>incre</button>
    <button onClick={increment}>increment</button>


    </>
   )
   

}

export default Products;

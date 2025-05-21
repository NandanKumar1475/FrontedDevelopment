import { useState } from "react";
import Profile from "./Profile";

const Followers = () =>{
    let[subscriber,setSubscriber] = useState(0);
    function inscr(){
        setSubscriber(++subscriber);
    }

    return(
        <>
        <Profile></Profile>

        <button onClick={inscr}>SUbscribe</button>
        <h1>Total Subscriber {subscriber}</h1>
        
        </>
    )
}
export default Followers
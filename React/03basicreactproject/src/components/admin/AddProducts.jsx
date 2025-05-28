import { useState } from "react";

const AddProducts = () => {
     const[cartlist,setCartlist] = useState(
        {
        "brand":"",
        "name":"",
        "price":"",
        "rating":"",
        "description":"",
        "thumbail":""
     })
     function handleChange(){

     }
    return ( 
        <>
        <div className="add-products">
            <h1>Welcome to add products</h1>
            <form action="">
                <label htmlFor="">
                    Brand :-
                </label>
                <select required>
                    <option>Adidas</option>
                    <option>Nike</option>
                    <option>Oldmonk</option>
                    <option>Kingfisher</option>
                    <option>Bro code</option>
                    <option>Magic moment</option>
                    <option>Red Label</option>
                    <option>Black level</option>
                    <option>Samsung</option>
                </select>

                <label>
                    Name:-
                </label>
                <input value={} onChange={} type="text"  required/>

                <label>
                    price:-
                </label>
                <input value={} onChange={} type="text"  required/>

                <label>
                    rating:-
                </label>
                <input value={} onChange={} type="text"  required/>

                <label>
                    Thumbai;:-
                </label>
                <input value={} onChange={} type="text"  required/>

                <label>
                    Description:-
                </label>
                <textarea value={} onChange={} type="text"  required/>

               <button>Add Products</button>

            </form>
        </div>
        </>
     );
}
 
export default AddProducts;
 // the process of returning multiple elemnts into single parent tags is called fragment 
import './Fragment.css'
function Vehicle(){
    let a  = 100;
    let Item = [
        {
            id : 1,
            name: "bicycle",
            price: 100
        },
        {
            id : 2,
            name: "car",
            price: 1000
        },
        {
            id : 3,
            name: "laptop",
            price: 999
        }

    ]
    return(
        <>
        <h1>Welcome to vehicle page</h1>
        <h2>the value of a is {a} using javascrit Exression </h2>
        <h1>Printing the vehicle item available in the showroom</h1>
        <fieldset>
            <legend>Items Available</legend>
            {
                Item.map((item)=>{
                    return(
                        <>
                         <h1>The item is {item.name} and price is {item.price}</h1>
                        </>
                    )
                })
            }
        </fieldset>

        </>
    )

}

export default Vehicle

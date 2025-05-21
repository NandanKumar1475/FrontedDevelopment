import React from "react";
class Car extends React.Component{
    render(){
        return(
            <>
            <h1>Welcome to class based component </h1>
            <fieldset>
                <legend>
                    Car Available
                </legend>
                <li>bmw</li>
                <li>audi</li>
                <li>merce</li>
                <li>suzuki</li>
            </fieldset>

            </>
        )
    }
}
export default Car
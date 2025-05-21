import React from "react";

class Resturent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            dish: {
                veg: "pulaoo",
                nonveg: "biryani"
            }
        }
    }

    inscremtCount = () =>{
        this.setState({
            count : this.state.count + 1,
            dish : {
                veg : this.state.dish.veg = "panner tikka masala",
                nonveg : this.state.dish.nonveg = "chiken tikka masala"
            }
            
        })
    }

    render() {
        return (
            <>
                <h1>the number of people in Resturent is =  {this.state.count}</h1>
                <h1>The veg item is = {this.state.dish.veg}</h1>
                <h1>This is non veg itemm {this.state.dish.nonveg}</h1>
                <button onClick={this.inscremtCount}>UpdateCustmer</button>
            </>
        )
    }
}
export default Resturent
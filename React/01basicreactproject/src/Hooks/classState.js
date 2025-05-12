import React from "react";
///statefull 
class Cashier extends React.Component{
    constructor(){
        super()
        this.state={
            number : 40,
            name : "Jspiders"
        }
        this.updateState=this.updateState.bind(this);
    }
    updateState(){
        this.setState({
            number : this.state.number+1,
            name : "Qspiders"
            
        })
    }
    render(){
        function updateInfo(){
            this.setState()
        }

        return(
            <React.Fragment>
                <button onClick={this.updateState}>Change</button>
                <p>This is class based Component</p>
                <h1>The number is : {this.state.number} is paid by {this.state.name}</h1>
            </React.Fragment>
        )
    }
}
export default Cashier;
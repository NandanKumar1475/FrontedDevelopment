import "./CashDept.css"
function CashDept() {
    let count = 0;

    function insc() {
        count++ ; 
        console.log(`the value of count is ${count}`);
          
    }

    function add(a , b){
        console.log(`The sum of ${a} and ${b} is ${a + b}`)
        alert(`The sum of ${a} and ${b} is ${a + b}`);
    }


    return(
        <>
        <h1>welcome to Day 2 of re3act class</h1>
        <h3>Event handler in react js</h3>
        <fieldset>
            <legend>Count fun</legend>
            <button onClick={insc}>Increase The count</button>
            <h1>the value of count is {count}</h1>
        </fieldset>
        <fieldset>
            <legend>Addition</legend>
            <button onClick={()=>{
                add(10,20)
            }}> AddFun</button>
        </fieldset>
        <br />

        
        </>
    )
    
}

export default CashDept
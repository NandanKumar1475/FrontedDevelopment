function Counter(){
    let a = 0;
    function increment() {
        a = a+1;
        console.log(a);
    }
    function print(a,b){
        let c = a+b;
        console.log(c);
        
    }
    return(
        <>
        <h1>Click to increment the Number</h1>
        <button onClick={increment}>increment</button>
        <h1>Count : {} </h1>

        <button onClick={()=>{
            print(10,20)
        }}>print</button>
        </>

    )
}
export default Counter;
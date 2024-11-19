//NormL function 
function oddNum( a) {
    if (a % 2 != 0) {
        console.log("odd Number");

    }
}
 oddNum(33); // calling the function

// anonmoyous function  without function  Name
// we can call the anonmouys function in two WebAssembly
// 1.function with expressionn 

let oddNum1  = function(a,b){
    console.log(a+b)
}
oddNum1(20,30);
//2 . imediate invoked function with expression
(function(a,b){
    console.log(a+b);
    
})(10,20);





function add(a,b){
    return a+b;
}
function mul(c,d){
    return c*d;
}

function operation(addFun,mulfun,a,b){
      let sum = addFun(a,b);
      let multi = mulfun(a,b);

      return sum+multi
}

// let sum = operation(add,10,20);
// console.log(sum);

// let mulp = operation(mul,20,30);
// console.log(mulp);


let total = operation(add,mul,40,50);
console.log(total);

console.log("=============call back function=================");
console.log("program started");
setTimeout(() => {
    console.log("hello callback");
    
}, 2000);
console.log("program end");

let print = ()=>{
    console.log("arrow function");   
}
console.log(print());

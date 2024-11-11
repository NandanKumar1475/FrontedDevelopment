// var support function hoisting 
// hosisting means use before declaration
console.log(add(40,30));
// by default a and b are var a and var b but in function it behaves like a functional scope
function add(a,b) {
    var c= a+b;
    return c;  
}
let sum = add(104,34);
console.log(sum);
console.log(add(20,30));


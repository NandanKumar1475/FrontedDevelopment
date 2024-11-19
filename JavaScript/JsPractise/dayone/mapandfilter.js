let cart = [{
    id: 1,
    name: "nandan",
    ctc: 100000000
},
{
    id: 2,
    name: "shann",
    ctc: 100000000
},
{
    id: 3,
    name: "umesh",
    ctc: 100000000
},
{
    id: 4,
    name: "shawez",
    ctc: 100000000
},
];
console.log(cart);
console.log("==using map function==");
//method 1 without return 
cart.map((x)=>{
    console.log(x)
    console.log(x.name +" "+x.name);
})

let list = cart.map((x)=>{
    return x.name;
})
console.log(list);


console.log("using for each");

cart.forEach((i)=>{
    console.log(i)
    console.log("name ==")
    console.log(i.name);
    
})

console.log("foreach with return not support undefined  ");
let list1 = cart.forEach((i)=>{
    return i;
})
console.log(list1);


console.log("===filter====");

let fltr = cart.filter((crt)=>{
     return crt.id >1;
})
console.log(fltr);

let fltr1 = cart.filter((crt)=>{
    if(crt.id==1){
        return crt
    }
})
console.log(fltr1);

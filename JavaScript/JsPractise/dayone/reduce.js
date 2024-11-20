let cart = [
    {
        id: 10,
        item: "phone",
        price: 200
    },
    {
        id: 2,
        item: "iphone",
        price: 2000
    },
    {
        id: 13,
        item: "phone",
        price: 200
    },
    {
        id: 4,
        item: "tv",
        price: 20
    },
    {
        id: 5,
        item: "Iphone 17",
        price: 150
    },
]

let cartValue = cart.reduce((sum,x)=>
    sum = sum + x.price,0
)
console.log(cartValue);

let arr1 = [1,5,6,2,5,8,4,0,9,8,0,10,20,15,18,17,30,14,15];
 let a1 =arr1.sort();
console.log(a1);

let a2 = arr1.sort((a,b)=>{
    return a-b // for ascending order
    return b-a // decending order
})
console.log(a2);



// splice method 


const arr = [1,2,3,4,5,6,7,8,6,6,6,6,6,6,5,6,8,9];
console.log(arr);

arr.splice(1,3,"hii");
console.log(arr);

// slice method 
 const sl = arr.slice(1,3);
console.log(sl);

console.log(arr.includes(1));
console.log(arr.indexOf(6));
console.log(arr.lastIndexOf(6 ));


console.log(null===undefined);


function nam() {
    var age  = 0;
    function incre() {
        age++
    }
     incre();
    console.log(age); 

}
nam();
nam();
nam();


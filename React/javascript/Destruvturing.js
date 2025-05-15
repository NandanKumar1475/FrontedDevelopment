const arr =  [1,2,3,4,5,6,7,8];
const arr1 = [11,2,3,,11,23,3,,3,33,3];
let [a,b] = arr;
console.log(a);
console.log(b);

let[c,...d] = arr;
console.log(c);
console.log(d);



function add(a,...b){
    console.log(a);
    
    console.log(b);
    
}
add(1,2,3,4,5,5,66,7,8,8);



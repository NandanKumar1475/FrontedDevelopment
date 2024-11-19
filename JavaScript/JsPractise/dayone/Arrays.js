// // arrays is mixture of hetrogenous and homegemous data
// let arr = [1,2,"hello",["secondArray","bye"],4,5,6];
// console.log(arr.length)
// console.log(arr)

// // inBuilt methods in Array
// // 1.push(arg1,arg2...) add elememnt in the last
// arr.push(8);
// arr.push(9.10,11,"nandan");
// console.log(arr);
// console.log(arr.length);

// // 2.pop() to remove elemet from last
// arr.pop();
// console.log(arr)

// // 3.unshift() add the element in the first
// // unshift(data1,data2...)
// arr.unshift(0,"hii");
// console.log(arr)

// // 4. shift() remove the element from  the first at a time one element is removed from the aray
//    arr.shift();
//    console.log(arr);

// // 5.splice() takes three argument
// // splice(arg1,arg2,arg3) arg1 = from where it start position 
// //  arg2 = no of Element to delete
// // arg3 = new Element

// // arr.splice(1,2,"shaan");
// // arr.splice(1,3);
// // arr.splice(1,4)
// // console.log(arr);

// // 6.slice(arg1,arg2)
// // arg1 postion at which start 
// // arg2 =  to end excluded
// console.log(arr);
//  let c= arr.slice(3,4);
//  console.log(c)
//  ;

var arr2 = [5,true,false,"hii baby","hello jee",5,3,5,2,1,"bye",'A'];
 
//7.tostring() -->used to convert array to string and it creates a copy does not affect the original data
console.log("Original Array = "+arr2)
let arr2Copy = arr2.toString();
console.log(arr2Copy);

//8.join() --> used to convert string but also we can give separator to add

let arr2copy2 = arr2.join()
console.log("with joins = "+arr2Copy);
arr2Copy = arr2.join("+");
console.log("with joins = "+arr2Copy);

// 9/indexof()  find the element in the array

let indexof = arr2.indexOf(2);
console.log(indexof);
// 10.last index of()
let lastindex = arr2.lastIndexOf(5);
console.log("last index of = " +lastindex);

let reverse = arr2.reverse();

const arr3 = [2,3,4,5,67,8,9,9,31,34]
arr3.reverse();
console.log("reverse array = "+ arr3);







// Objects in javascript

// Objects is a collection of key and value pair 
// It is a collection of heterogeneous elements where we can store 
// multiple elements based on their key names as a address followed by
// their key and value pairs.
// Objects are considered as a super class in javascript from
// where we are inheriting all the properties of javascript
// javascript is a pure object oriented programming language
// because every element in javascript is inherited from the object class

// Syntax:

// let objName = {
//     key : value,
//     key : value,
//     key : value,
// }

// Eg :

//     let emp = {
//         id : 5,
//         name : "abc",
//         phone : 1234567890,
//         marks : [123,23]
//     }


// Ways to create objects in javascript


// objects using literals
// Objects is a collection of key and value pair.
// Objects can be created manually by
// storing it into a Variable literal manually.

// Eg :
// let emp = {
//     id : 5,
//     name : "abc",
//     phone : 1234567890,
//     marks : [123,23]
// }

// console.log(emp);
// // get 
// To access the elements or the values of the object we 
// have to use "." dot operator
// followed the respaective key names.

// console.log(http://emp.name);
// console.log(emp.marks[0]);
// console.log(http://emp.phone);

// // create
// we can create a new key name into the object dynamically.
// Objects are mutable.

// emp.course = ["java","sql"];
// console.log(emp);

// // update
// We can modify the values of object dynamically
// by using its key name.

// http://emp.name = "aditya";
// console.log(emp);

// // delete
// Objects can delete the specific
// key and value pair by using "delete" operator.

// delete http://emp.id;
// console.log(emp);
 
// CONSTRUCTOR FUNCTION:

// -A function which is used to create an Object is known as constructor
//  function

// Syntax:
// function identifier(parameter,....){

// }

// Note:
// -If the function is designed to use as a constructor then the name of 
// the function should always be UpperCamelCase.
// -List of parameter provided to the function wil be treated as the keys
// (properties) of the object
// -The arguments passed when the function is called will be the values.
// -we can copy the the values into the keys of object from parameters
//  using 'this' keyword.
// -We can create an object using constructor function with the
//  help of 'new' keyword
// -syntax:
// new function();

// Note: 'new' creates the object and returns its reference.

// Ex:
// //function construction

// function Student(sid,sname){
//     this.sid=sid;
//     this.sname=sname;
// }
// let s1 = new Student(1,'A');
// let s2 = new Student(2,'B');
// let s3 = new Student(3,'C');

// console.log(s1.sid);
// console.log(s1.sname);
// console.log(s2.sid);
// console.log(s2.sname);
// console.log(s3.sid);
// console.log(s3.sname);

// // DOM
// // Dom stands for document object model .
// // Dom is present inside the Browser.
// // Dom is a not a part of javascript its a interface between browser and javascript.
// // Dom is a browser api used between Javascript and browser to create the HTML css elements through javascript.
// // Dom allows the user to convert html Elements into the javascript objects.
// // Dom is a tree like structure of html tags that is present in javascript to manipulate the elements of html and css in javascript.
// // Dom is a hirarchcal structure of HTML elements that is present inside the browser.
// // To select the elements of Html in javascript we a Selectors in Dom :
// // dom uses a keyword known as document that is used as a root object that has all the inbuilt methods of selectors.
// // <script>
// //     document.getElementById();
// //     document.getElementsByClassName();
// //     document.getElementsByTagName();
// //     document.getElementsByName();
// //     document.querySelector();
// //     document.querySelectorAll();

// //     1.document.getElementById() is a selector method in dom that is used to select the Single element in html with help of idName of a tag.
// //     *idName is a unique property so getElementById can only access one element of html at a time by using this method.
// //     *getElementById method converts the particular html element into Javascript object.
// //     *We can print anything to that object by using a property known as innerText or textContent.
// //     * It uses the id as a parameter for a function.

// // eg:
// // html 
// // <body>
// // <h1 id="yuno"></h1>
// // </body>

// // let h1 = document.getElementById('yuno');
// // h1.innerText = "Welcome to Javascript"
// // console.log(h1);
// // console.log(typeof h1);
// // h1.style.backgroundColor = "green"
// // h1.style.color = "white"


// //     2.document.getElementsByClassName()
// //     is a selector method in dom that is used to select the multiple elements in html with help of ClassName of a tag.
// //     *className is a not unique property so getElementsByClassName can  access multiple elements of html at any time by using this method.
// //     *getElementsByClassName method converts the particular html element into Javascript object in the form of collection of Arrays.
// //     *We can print anything to that object by using a property known as innerText or textContent by using the index value of the array.
// //     * It uses the className as a parameter for a function.
    
// //     eg:
// // html 
// // <body>
// // <h1 class="chamy"></h1>
// // </body>

// // let paragraph = document.getElementsByClassName('chamy');
// // paragraph[0].innerText = "This is a paragraph"
// // paragraph[1].innerText = "New Paragrapgh"
// // console.log(paragraph);
// // console.log(typeof paragraph);


// //     document.getElementsByTagName();
// //     is a selector method in dom that is used to select the multiple elements in html with help of TagName of a tag.
// //     *TagName is a not unique property so getElementsByTagName can  access multiple elements of html at any time by using this method.
// //     *getElementsByTagName method converts the particular html element into Javascript object in the form of collection of Arrays.
// //     *We can print anything to that object by using a property known as innerText or textContent by using the index value of the array.
// //     * It uses the TagName as a parameter for a function.
    
// //     eg:
// // html 
// // <body>
// // <h3></h3>
// // </body>

// // let heading = document.getElementsByTagName('h3')
// // heading[0].innerHTML = "I am a heading 3"
// // heading[1].innerHTML = "I am a heading 2"
// // console.log(heading);
// // heading[0].style.backgroundColor = "crimson"

// //     document.getElementsByName();
// //     is a selector method in dom that is used to select the multiple elements in html with help of Name of a tag.
// //     *idName is a not unique property so getElementsByName can  access multiple elements of html at any time by using this method.
// //     *getElementsByName method converts the particular html element into Javascript object in the form of collection of Arrays.
// //     *We can print anything to that object by using a property known as innerText or textContent by using the index value of the array.
// //     * It uses the Name as a parameter for a function.
    
// //     eg:
// // html 
// // <body>
// // <h1 name="chamy"></h1>
// // </body>

// // let paragraph = document.getElementsByName('chamy');
// // paragraph[0].innerText = "This is a paragraph"
// // paragraph[1].innerText = "New Paragrapgh"
// // console.log(paragraph);
// // console.log(typeof paragraph);

// //     document.querySelector();
// //     is a selector method in dom that is used to select a single element of html using the css selectors with operators.
// //     *It uses the paramenter followed by #idName, .className, TagName to select the elements of html.
// //     *It converts the elements of Html into the form of Nodelists.
// //     *querySelector is a  unique property so querySelector can  only access one element of html at a time by using this method.
// //     *We can print anything to that object by using a property known as innerText or textContent .
// //     eg :
// //     let h4 = document.querySelector('#astha');
// // h4.innerHTML = "i am a query selector";
// // h4.style.backgroundColor = "blue";
// // h4.style.color = "White"

// // let h2 = document.querySelector('.lufi');
// // h2.textContent = "I a the HEADING PART TWO";


// //     document.querySelectorAll();
// //     is a selectorAll method in dom that is used to select a multiple elements of html using the css selectors with operators.
// //     *It uses the paramenter followed by #idName, .className, TagName to select the elements of html.
// //     *It converts the elements of Html into the form of Nodelists.
// //     *querySelectorAll is a  unique property so querySelectorAll can   access more than one element of html at a time by using this method.
// //     *We can print anything to that object by using a property known as innerText or textContent .
// //     eg :
// //     let h4 = document.querySelectorAll('#astha');
// // h4[0].innerHTML = "i am a query selector";
// // h4[1].style.backgroundColor = "blue";
// // h4[0].style.color = "White"


// // promises in JavaScript 



// // promises created by the client and server during the transmission of a request and response

// // promises are not created by developer

// // promise have three states

// // resolve

// // reject

// // pending



// // resolve and reject the parameters of promise in a callback function

// // pending is a initial state that gets automatically called whenever we Fetch the data from the server

// // to handle the pending state  we have to use .then block  and .catch block

// // then block is used to accept the resolve state

// // and catch block is used to handle reject state  


// // Eg:
// // let data = Promise((resolve, reject) => {
// //     if (resolve) {
// //         console.log(resolve);
// //     }
// //     else{
// //         console.log(reject);
// //     }
// // })

// // fetch(url)
// // .then((resolve)=>{
// //     console.log(resolve);
// // })
// // .catch((reject)=>{
// //     console.log(reject);
// // })

// // // In JavaScript, the async keyword declares a function 
// // // as asynchronous and always returns a promise, while the await
// // //  keyword pauses the execution of an async function until a promise  
// // // async: Declares a function as asynchronous 
// // // await: Pauses the execution of an async function until a promise settles, 
// // // either resolving or rejecting 
// // // await can only be used within an async function. For example,
// // //  let userData = await fetchUserData(); 
// // // pauses execution until the promise settles and then returns the
// // //  resolved value. This allows developers to write asynchronous code that 
// // //  looks similar to synchronous code

// // //  Eg:
// // // async function reqData(){
// // //     let res =await fetch(url);
// // //     let data =await res.json();
// // //  }
// // //  reqData()

// // Diffrence between synchronous and asynchronous

// // Asynchronous JavaScript is the programming method where operations are run
// //  independently allowing the program to continue running while waiting for 
// //  certain tasks to complete. 
 
// //  Synchronous JavaScript is the programming approach
// //   where tasks of a program are executed sequentially one at a time.

// Sort
//  // let newArr = arr.sort((a,b)=>{
// //   return a - b;
// // })
// // console.log(newArr);

// // let newArr = arr.sort((a,b)=>{
// //   return b - a;
// // })
// // console.log(newArr);

 

// Sort is a array inbuilt method that is used to sort the elements in ascending and descending  order  

// Sort takes call back function as a arguments and takes two parameters arr[i] - arr[i+] and compares them to sort them in order 

// // let h2 = document.querySelectorAll('.lufi');
// // h2[0].textContent = "I a the HEADING PART TWO"; 

// Dec 02 - 11:36 am

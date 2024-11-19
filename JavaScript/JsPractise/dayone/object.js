let student = {
    id :1,
    name: "nandan",
    lastname:"kumar",
    subject:{
        web:80,
        sql:90,
        java:95
    },
    marks:[100,200,300,400],
    ispresent:true
};

// get
console.log(student);
console.log("name = "+student.name);
console.log(" all marks = "+student.marks);
console.log(" single marks = "+student.marks[1]);
console.log("java marks = "+student.subject.java);

// edit 
student.ispresent = false;
console.log(student);

//add
student.age = 30;
console.log(student);

// delete
delete student.age;
console.log(student);

// method 2  using function to create class and object  
console.log("==========second way of creating object===============");
function student1(id,name,gfname,phoneno,subject){
    this.id=id;
    this.name= name ;
    this.gfname= gfname;
    this.phoneno =phoneno;
    this.subject=subject;
}


let stud1 = new student1(1,"nandan","alia",87543,"webtech");
console.log(stud1);

console.log("==========Third way of creating object===============");
class Bike{
    constructor(id,name,ctc,company){
        this.id=id;
        this.name=name;
        this.ctc= ctc;
        this.company=company;
    }
}

let b1= new Bike(1,"nandan",10.00,"Amazon");
console.log(b1);





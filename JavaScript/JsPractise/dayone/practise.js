let student={
    id:1,
    name:"chandan",
    section:"A",
    branch:"cse",
    isPaidFee:false,
    Addres:{
        dist:"gaya",
        state:"bihar",
        pincode:82324,

    },
    subject:["cs","html","js"]
}
console.log(student);
console.log(student.name);
console.log(student.Addres);
console.log(student.Addres.dist);
console.log(student.subject);
console.log(student.subject[0])

// 2.
function student1(id,name,section,branch){
    this.id=id,
    this.name = name,
    this.section=section,
    this.branch = branch
}

let stud1 = new student1(1,"nandan","A","cse");
console.log(stud1);
console.log(stud1.name);

class student2{
    constructor(id,name,email,password){
        this.id=id,
        this.name=name,
        this.email=email,
        this.password=password
    }
};

let stud2 = new student2(2,"ram","ram@gmail.com","ram@123");
console.log(stud2);
console.log(stud2.name);
console.log(stud2.password);

const student3 = [
    {
        id:1,
        name:"chandan",
        section:"A",
        branch:"cse",
        isPaidFee:false,
        Addres:{
            dist:"gaya",
            state:"bihar",
            pincode:82324,
    
        },
        subject:["cs","html","js"]
    },
    {
        id:2,
    name:"chandan",
    section:"A",
    branch:"cse",
    isPaidFee:false,
    Addres:{
        dist:"gaya",
        state:"bihar",
        pincode:82324,

    },
    subject:["cs","html","js"]
    },{
        id:3,
    name:"chandan",
    section:"A",
    branch:"cse",
    isPaidFee:false,
    Addres:{
        dist:"gaya",
        state:"bihar",
        pincode:82324,

    },
    subject:["cs","html","js"]
    },{
        id:4,
    name:"chandan",
    section:"A",
    branch:"cse",
    isPaidFee:false,
    Addres:{
        dist:"gaya",
        state:"bihar",
        pincode:82324,

    },
    subject:["cs","html","js"]
    },{
        id:5,
    name:"chandan",
    section:"A",
    branch:"cse",
    isPaidFee:false,
    Addres:{
        dist:"gaya",
        state:"bihar",
        pincode:82324,

    },
    subject:["cs","html","js"]
    },{
        id:6,
    name:"chandan",
    section:"A",
    branch:"cse",
    isPaidFee:false,
    Addres:{
        dist:"gaya",
        state:"bihar",
        pincode:82324,

    },
    subject:["cs","html","js"]
    }
]
console.log(student3);

student3.map((x)=>{
    console.log(x)
})

let stud4 = student3.map((x)=>{
    return (x.id+ " "+x.name);
})
console.log(stud4);

student3.forEach((s)=>{
    // console.log(s);
    console.log(s.id+ " "+s.name +" " +s.isPaidFee);
})

let stud5 = student3.forEach((s)=>{
    return s;
})
console.log(stud5);

// 3.filter

student3.filter((s)=>{
    if(s.id>1){
        console.log(s.id +" "+s.name);
    }
})

let stud6 = student3.filter((s)=>{
    return s.id >3;
})
console.log(stud6);
student3.isPaidFee =true;

// for student 
student.age = 30;
console.log(student);
student.name ="nandan"
console.log(student);
delete student.id;
console.log(student);





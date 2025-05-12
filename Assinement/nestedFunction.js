const user = [
    {
        name:"nandan",
        email:"nandan@123gmail.com",
        password:1234,
        Address:"Gaya"

    },
    {
        name:"chandan",
        email:"chandan@123gmail.com",
        password:124,
        Address:"patna"

    },
    {
        name:"kundan",
        email:"kundan@123gmail.com",
        password:234,
        Address:"Bihar"

    },
]
 var flag = false;
 var accountStatus = "active";
function Login (username,password) {
   user.map((data)=>{
    if(data.name ==username && data.password==password){
        flag =  true;
    }  
   })

   function DeleteAccount() {
      if(flag == true){
           accountStatus = "deactive"
         }
      }
      DeleteAccount();

}

 Login("nandan",1234);
 console.log(flag);
 console.log(accountStatus);

 // function iife
(function(status){
    if(accountStatus == status){
        console.log("hide the detials of user");
        
    }

})("deactive")
 
 


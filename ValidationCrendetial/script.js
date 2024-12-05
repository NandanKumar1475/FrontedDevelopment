
function validaCrendential(){
    const uname = document.querySelector("#username").value ;
    const pwd = document.querySelector("#password").value;
    console.log(uname,pwd)
    if(uname=="nandan" && pwd ==12345){
        alert("Login success")
    }else{
        alert("invalid username && password ");
    }
}

function validateCredential(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "nandan" && password === "nandan@123") {
        console.log("Login Successful");
    } else {
        console.log("Wrong credential");
    }
}
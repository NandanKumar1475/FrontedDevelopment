const jsondata = document.getElementById("jsondata");
fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => {
        return data.json(); 
    })
    .then((resonse) => {
        console.log(resonse); 
        resonse.map((i)=>{
            console.log(i)

        })
        jsondata.innerHTML = JSON.stringify(resonse, null, 2); 
    })
    .catch((err) => {
        console.log(err);
    });

const btn = document.querySelector("button");
console.log(btn);
btn.style.fontSize = "20px";
btn.style.fontFamily="cursive";
const page =  document.querySelector("body")
page.style.transition = "0.8s";
console.log(page);

setInterval(function bgChange(){
    if(page.style.backgroundColor != "black"){
        page.style.backgroundColor = "black";
        page.style.color = "white";
    }else{
        page.style.backgroundColor = "white";
        page.style.color = "black";
    }
},3000)

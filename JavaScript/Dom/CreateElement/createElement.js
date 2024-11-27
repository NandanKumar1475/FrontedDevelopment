
const heading1 = document.createElement("h1");
heading1.innerHTML = "Java"

const div1Content = document.getElementById("div1");

div1Content.appendChild(heading1);

const image = document.createElement('img');
image.src = "https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg?w=300";

div1Content.appendChild(image);

const div2Content = document.getElementsByClassName("cls");
console.log(div2Content);
div2Content[0].innerText = "Heading porem asdkbefe ";
div2Content[1].innerHTML = "Ram shyam" ;
div2Content[2].innerHTML = "umesh meri jaan"

div2Content[1].style.fontSize =  "40px"
div2Content[0].style.backgroundColor = "red"


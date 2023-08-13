function getUser(){
    fetch('https://randomuser.me/api')
    .then(resp => resp.json())
    .then(users => console.log(users));
}  

const button = document.createElement("button");
button.innerHTML = "Click Me!";
const body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", (getUser));


    

let hearder = document.getElementById("header");
header.innerText = "JavaScript Made This!!"
header.style.textAlign = "center"
header.style.fontSize  = "45px"


let myName = document.createElement("span")
myName.style.textAlign = "center"
myName.style.fontSize = "25px"
myName.innerHTML = '<br><span class="myname">Crystal Musser</span> wrote the javascript'
document.getElementById("header").appendChild(myName)


let messages = document.getElementsByClassName("message");
messages[0].innerText = "Knock,knock"
messages[1].innerText = "Who's there?"
messages[2].innerText = "Boo."
messages[3].innerText = "Boo who?"
messages[4].innerText = "You don't have to cry. It's just a joke."
messages[5].innerText = "Hahaha!"


let button = document.getElementById('clear-button')

document.getElementById("clear-button").addEventListener("click", function(messages){
 var messages = document.getElementsByClassName("message");
 while(messages.length >0) {
     messages[0].parentNode.removeChild(messages[0]);
 }

})

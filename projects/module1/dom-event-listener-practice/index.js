let div = document.querySelector("div");

document.addEventListener("keydown",(event) =>{
    var name = event.key;
//    var code = event.code;
    if (name === "b") {
    document.querySelector("div").style.backgroundColor = "blue";
    }else if (name === "g"){
    document.querySelector("div").style.backgroundColor = "green";
    }else if (name === "o"){
    document.querySelector("div").style.backgroundColor = "orange";
    }else if (name === "r"){
    document.querySelector("div").style.backgroundColor = "red";
    }else if (name === "y"){
    document.querySelector("div").style.backgroundColor = "yellow";
    }
})


//mouse event Listener
document.querySelector("div").addEventListener("mouseover", function() {
    document.querySelector("div").style.backgroundColor = "blue"
})

document.querySelector("div").addEventListener("mouseleave", function() {
    document.querySelector("div").style.backgroundColor = "orange"
})

document.querySelector("div").addEventListener("mousedown", function() {
    document.querySelector("div").style.backgroundColor = "red"
})


document.querySelector("div").addEventListener("mouseup", function() {
    document.querySelector("div").style.backgroundColor = "yellow"
})

document.querySelector("div").addEventListener("dblclick", function() {
    document.querySelector("div").style.backgroundColor = "green"
})

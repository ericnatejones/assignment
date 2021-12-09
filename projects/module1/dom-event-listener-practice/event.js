//let square = document.getElementById("square")

//function moveMouseover() {
//    console.log("mouseover!")
//} 

//square.addEventListeneer("mouseover", moveMouseover)

document.querySelector("div").addEventListener("mouseover", function() {
    document.querySelector("div").style.backgroundColor = "blue"
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


var clickCount = 0;

div.addEventListener ('click', function(){
    clickCount++;
    if(clickCount === 1) {
        mousedownClickTimer = setTimeout (function(){
            clickCount = 0;
            mousedown();
        },500);
    }else if (clickCount === 1) {
        mouseupClickTimer = setTimeout (function(){
            clickCount = 0;
            mouseup();
        },500);
    }else if (clickCount ===2) {
        doubleClickTimer = setTimeout (function(){
            clickCount = 0;
            doubleClick();          
    },false);
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


//function mousedown() {
//    div.style.backgroundColor = "red"
//}

//function mouseup()   {
//    div.style.backgroundColor = "yellow"
//}

//function doubleClick() {
//    div.style.backgroundColor = "green"
//}

//function mouseleave() {
//    div.style.backgroundColor = "orange"
//}


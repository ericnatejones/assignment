messages[4],innerText = "You don't have to cry. It's just a joke."
messages[5],innerText = "Ha!"


let value = document.querySelectorAll("option[value='themeTwo']")
valueRight.style.backgroundColor = "rgb(241, 190, 166)"
right.style.backgroundColor = "rgb(92, 84, 73)"



function colorChange() {
    var bgColor = document.getElementById('themeDropDown').value;
    document.getElementById('themeDropDown').style.backgroundColor = bgColor;
    }
    
    function themeOne() {
        
    
    }

    function colorChange () {
        var select = document.getElementById("themeDropDown");
        if (select == "themeOne"){
            document.select.style.backgroundColor = lightblue
            document.select.style.backgroundColor = burlywood
        }else if (select == "themeTwo"){
            document.right.style.backgroundColor = rgb(241, 190, 166)
            document.left.style.backgroundColor = rgb(92, 84, 73)
        }
        
    }


    function removeElementsByClass(classname) {
        const elements = document.getElementsByClassName("message")
        while (elements.length>0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    document.getElementById('clear-button').addEventListener('click', msgClear);
    function msgClear() {
        document.getElementsByClassName('right').innerText = ""
    }    

    document.getElementById("clear-button").addEventListener("click", function(e){
        e.preventDefault()
        button.getElementsByClassName("messages").innerHTML = ""
       console.log ('clear')
    })
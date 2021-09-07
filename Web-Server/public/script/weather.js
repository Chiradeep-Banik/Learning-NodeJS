console.log("weather.js");

var text_input = document.querySelector("input");
var button = document.querySelector("button");
var app = document.querySelector("#app");

button.addEventListener("click", ()=>{
    var ele = document.querySelector(".text-center");
    if(ele)
        ele.parentNode.removeChild(ele);
    var val = text_input.value;
    var new_ele = document.createElement("h1");
    new_ele.classList.add("text-center");
    if(val == ""){
        new_ele.innerHTML = "Please enter a place...";
    }else{
        new_ele.innerHTML = "Weather : "+val;
    }
    app.appendChild(new_ele);
    text_input.value = "";
});
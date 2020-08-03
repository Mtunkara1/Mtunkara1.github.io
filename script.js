let myh1= document.getElementById("text");


function changeText(){
  myh1.innerHTML= (myh1.innerHTML == "click above PAGE 1 for next page") ? ":)" : "click above PAGE 1 for next page";

}

function changeSize(){

}

myh1.addEventListener("mouseover",changeText);
myh1.addEventListener("mouseleave", changeText);
myh1.addEventListener("mouseover",changeSize);
myh1.addEventListener("mouseleave", changeSize);
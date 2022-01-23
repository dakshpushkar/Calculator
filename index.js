const buttonElement = document.querySelectorAll("button");
const display = document.querySelector("#input");
buttonElement.forEach(function(button){
  button.addEventListener("click",calculate);
});
   function calculate(event){
       const clickedbuttonElemetValue = event.target.value;
       if(clickedbuttonElemetValue === "ans"){
           if(display.value!==""){
              display.value = eval(display.value);
           }
       }
       else if(clickedbuttonElemetValue === 'Clear'){
           let str = document.getElementById("input").value
           document.getElementById("input").value = str.substring(0,str.length-1);
       }
       else if(clickedbuttonElemetValue === 'reset'){
           display.value = "";
       }
       else{
           display.value = display.value + clickedbuttonElemetValue;
       }

   }
const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const tokelvin=document.getElementById("tokelvin");
const kelvin=document.getElementById("kelvin");


const result = document.getElementById("result");


function convert() {
    let temp;

    if (tofahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " ℉"; // Alt + 2109 for ℉
    } 
    else if (tocelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + " ℃"; // Alt + 2103 for ℃
    } 
     else if (tokelvin.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9)+273;
        result.textContent = temp.toFixed(1) + " K"; 
    } 
      else if (kelvin.checked) {
        temp = Number(textbox.value);
        temp = (temp - 273);
        result.textContent = temp.toFixed(1) + " K"; 
      }
    else {
        result.textContent = "Select a unit!";
    }

}
   
    
    
    
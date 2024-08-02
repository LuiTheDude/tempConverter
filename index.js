const textbox = document.getElementById(`textbox`);
const cToF = document.getElementById(`cToF`);
const fToC = document.getElementById(`fToC`);
const result = document.getElementById(`result`);
let temp;

function convert(){
    if(cToF.checked){
        temp = Number(textbox.value);
        temp = temp*9/5 + 32;
        result.textContent = temp.toFixed(1) + `°F`;
    }
    else if(fToC.checked){
        temp = Number(textbox.value);
        temp = (temp-32)*5/9;
        result.textContent = temp.toFixed(1) + `°C`;
    }
    else{
        result.textContent = `Select an option`;
    }
}
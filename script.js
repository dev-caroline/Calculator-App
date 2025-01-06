let display = document.getElementById('display') 

let screen = ""
function updateDisplay(){
    display.innerHTML = screen;
}
function btn(){
    window.location.href = "calculator.html"
}
function per(){
    screen += '%';
    updateDisplay();
}
function dot(){
    screen += '.';
    updateDisplay();
}
function minus(){
    screen += '-';
    updateDisplay();
}
function times(){
    screen += 'x';
    updateDisplay();
}
function divide(){
    screen += '/';
    updateDisplay();
}
function plus(){
    screen += '+';
    updateDisplay();
}
function sign(){
    screen += '+/-';
    updateDisplay();
}
function enter(){
    alert('lol')
}
function clearDisplay(){
    screen += '';
    updateDisplay();
}
function mode(){
    alert('light mode')
}
function addToDisplay(value){
    screen += value
    updateDisplay()
}
//learn slice
function del(){
    screen = screen.slice(0, -1)
    updateDisplay()
}

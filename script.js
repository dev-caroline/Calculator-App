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
function clearDisplay(){
    screen = '';
    updateDisplay();
}
function darkMode(){
    main.style.backgroundColor = "black";
    main.style.color = "white"
    tab.style.backgroundColor = "black"
    tab.style.color = "white"
}
function lightMode(){
    main.style.backgroundColor = "white";
    main.style.color = "black"
    tab.style.backgroundColor = "white"
    tab.style.color = "black"
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
function enter(){
    if (screen == ''){
        display.innerHTML = `<p class = "text-center" style="color: grey;">Invalid Input!</p>`
    }
    // else{
    //     for(i=1;1<=10;i++){
    //         console.log(i);
            
    //     }
    // }
}

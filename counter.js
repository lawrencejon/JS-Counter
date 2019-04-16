var add = document.querySelector("#plus");
var subtract = document.querySelector("#minus");
var addFiveButton = document.querySelector("#plus-five");
var subtractFiveButton = document.querySelector("#minus-five");
var resetButton = document.querySelector("#reset");
var numDisplay = document.querySelector("#num");
var num = 0;

add.addEventListener("click", function() {
    num++;
    numDisplay.textContent = num;
});

subtract.addEventListener("click", function() {
    if (num > 0) {
        num--;
        numDisplay.textContent = num;
    }    
});

addFiveButton.addEventListener("click", function() {
    num += 5;
    numDisplay.textContent = num;    
});

subtractFiveButton.addEventListener("click", function() {
    if (num - 5 >= 0) {
        num -= 5;
        numDisplay.textContent = num; 
    }    
});

resetButton.addEventListener("click", reset);


function reset() {
    num = 0;
    numDisplay.textContent = "0";
}

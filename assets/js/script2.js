var addButton = document.getElementById("addButton");
var removeButton = document.getElementById("removeButton");
var currentNumberWrapper = document.getElementById("currentNumber");
currentNumber = 0;
let count = 0;


addButton.addEventListener("click", function(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    count = currentNumber;
    if (count >= 10){
        addButton.disabled = true;
    }else if(count < 10){
        addButton.disabled = false;
    }
});

removeButton.addEventListener("click", function(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    count = currentNumber;
    if (count <= -5){
        removeButton.disabled = true;
    }else{
        removeButton.disabled = false;
    }
   
});
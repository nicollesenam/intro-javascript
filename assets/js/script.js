var currentNumberWrapper = document.getElementById("currentNumber");
currentNumber = 0;


function increment(){ //função chamada ao clicar por meio do onlclick no html
    currentNumber = currentNumber + 1; 
    currentNumberWrapper.innerHTML = currentNumber; //innerHTML, html que está no span, e irá mudar para o número a partir do cálculo de currentNumber 
}

function decrement(){ //função chamada ao clicar por meio do onlclick no html
    currentNumber = currentNumber - 1; 
    currentNumberWrapper.innerHTML = currentNumber; 
}
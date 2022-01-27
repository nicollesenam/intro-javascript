function numPares(arr){
    return arr.filter(function(item){
        return item % 2 === 0; //dentro da função de callback do filter tem que colocar a condição para filtrar
    });
}

const num = [1,2,3,4,5,6,7,8];
console.log(numPares(num));
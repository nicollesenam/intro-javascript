/* Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.
Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
 */

function substituiPares(array){
    if(!array.length) return -1; //se array nao for verdadeiro vai retornar -1
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){ //verificando se o elemento desse indice do array é igual a zero
            console.log("você já é zero!")
        }else if(array[i] % 2 === 0){ //se nao, se o indice do elemento for divisivel por 2, ou seja, for par
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0; //atribui o valor 0 a esse indice que é par
        }
    }

    return array;
}
let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));
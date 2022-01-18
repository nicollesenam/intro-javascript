let array = ['string', 1, true, ['array2'], ['array3'], ['array4']];
console.log(array[3]);

//como manipular array
/* 
forEach() - itera um array
push() - add item no final do array
pop() - remove item do final do array
shift() - remove item no inicio do array
unshift() - add item no inicio do array
indexOf() - retorna o indice de um valor
splice() - remove ou substitui um item pelo indice
slice()- retorna uma parte de um array existente

*/
//forEach
/* array.forEach(function(item, index){
    console.log(item,index);
    //pra cada item ele imprme o indice
    // numero 1 indice 1 
}) 
*/

//forEach recebe uma função que recebe uma instrução e dentro da função pode passsar um item e um indice

//push
/* array.push("novo item");
console.log(array); */

//pop
/* array.pop();
console.log(array); */

//shift
/* array.shift();
console.log(array); */

//unshift
/* array.shift("novo item no inicio");
console.log(array);
 */

//indexOf
//console.log(array.indexOf(true));
//index do valor true

//splice
/* array.splice(0,3);
console.log(array); //vai pegar os valores do indice 0 ao 3 */

//slice
/* let novoarray = array.slice(0, 3);
console.log(novoarray);    //(start, end) */
//vai pegar os 3 primeiros indices

//Objetos

//dados que possuem propriedades e valores que definem suas caracteristicas. Deve ser declarado entre chaves{}

//manipulação de objetos
//- as prorpeidades podem ser atribuidas a variaveis (desestruturação)
/* 
var xicara = {
    cor: 'azul',
    tamanho: 'p',
    funcao: tomarCafe()
}

var cor = xiraca.cor;
var tamanho = xicara.tamanho;
var funcao = tomarCafe();

*/

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'], 
    objectInterno:{objectInterno: "objeto interno"}
};

console.log(object.boolean); //vai retornar true

//desestruturação
var string = object.string;
console.log(string);

var objectInterno = object.objectInterno;
console.log(objectInterno);

//outra maneira de fazer desestruturação
var {string, boolean} = object;
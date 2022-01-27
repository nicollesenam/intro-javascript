function somaNum(arr){
    return arr.reduce(function(prev, current){ //previous value e current value
        return prev + current; 
            //   1  +  2;
    });

}

const arr = [1,2]; 
            //valor anterior (prev) vai ser considerado 1 porque nao começa com nada, e o atual (current) vai ser o 2

console.log(somaNum(arr));


/* 
function somaNum(arr){
    return arr.reduce(function(prev, current){ //previous value e current value
        return prev + current; 
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0); // inicializando previous/acumulador com 0

}

const arr = [1,2];
console.log(somaNum(arr));

vai retornar:
{prev: 0}
{current: 1} 
{prev: 1}
{current: 2}
3



 */


//crie uma função que recebe uma lista de preços e um número representando saldo disponivel
//calcule qual sera o saldo final apos subtrair todos os preços da lista enviada

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },

];

const saldoDisponível = 100;

function calculaSaldo(lista, saldoDisponível){ //passando objeto e saldo
    return lista.reduce(function(accumulator, current){ 
        console.log({accumulator}) //acumulador começando com 100
        console.log({current}) //valor atual começando pelo primeiro valor do preço do objeto 
        return accumulator - current.preco; //tem que ser .preco porque o item é um objeto.preco para acessar o preço
    }, saldoDisponível); //acumulador vai ser 100 - preço dos itens até retornar o saldo disponível
}

console.log(calculaSaldo(lista, saldoDisponível));
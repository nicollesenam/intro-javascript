//for 
//loop dentro de elementos iteráveis (arrays, strings)

function multiplicaPorDois(arr){ //recebe um array de parametro
    let multiplicados = []; //array auxiliar

    for(let i = 0; i < arr.length; i++){ //quando o indice for 0, e i menor que o tamanho do array, acrescenta +1
        multiplicados.push(arr[i] *2); //vai adicionar valor no final, no caso o valor é a multiplicacao do indice por 2
    }

    return multiplicados; //retornar arrays
}

const meusNumeros = [2,33,456,356,40]; 

console.log (multiplicaPorDois(meusNumeros)); //[ 4, 66, 912, 712, 80 ]
//colocando dentro do parametro os numeros


//For...in
//loop entre propriedades enumeráveis de um objeto
//pegar a propriedade do objeto

function forInExemplo1(obj){
    for(prop in obj){ //prop pega todas as propriedades de algo
        console.log(prop);
    }
}

const meuObjeto1 ={
    nome: "João",
    idade: "20",
    cidade: "Salvador"
};

forInExemplo1(meuObjeto1);
// nome
//idade
//cidade

//pegar os valores das propriedades do objeto

function forInExemplo2(obj){
    for(prop in obj){ //prop pega todas as propriedades de algo
        console.log(obj[prop]); //usa-se colchetes para acessar os valores de cada prop
    }
}

const meuObjeto2 ={
    nome: "João",
    idade: "20",
    cidade: "Salvador"
};

forInExemplo2(meuObjeto2);
// João
// 20
// Salvador


//for...of
//loop entre estruturas iteráveis (arrays, strings)

function logLetras(palavra){
    for(letra of palavra){ //pode ser qualquer nome tanto letra quanto palavra
        console.log(letra);
    }
}

const palavra = "abacaxi";

console.log (logLetras(palavra));

function logNumeros(nums){
    for(num of nums){ //pode ser qualquer nome 
        console.log(num);
    }
}

const nums = [30,20,233,2];

console.log (logLetras(nums));


//------------------------------------------

//while 
//executa instruções até que uma condição se torne falsa
function exemploWhile(){
    let num = 0;

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile();
//0 
//1
//2
//3
//4
//5

//do...while
//executa instruções até que a condição se torne falsa porém a primeira execução sempre ocorre

function exemploDoWhile(){
    let num = 0;

    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploDoWhile()
//0
//1
//2
//3
//4
//5

function exemploDoWhile(){
    let num = 6;

    do{
        console.log(num);
        num++;
    }while(num <= 5) //nao chega aqui por começar em 6 e a primeira execuçao sempre acontecer
}

exemploDoWhile()
//6
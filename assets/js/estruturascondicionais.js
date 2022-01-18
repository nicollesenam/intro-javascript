
/*
var jogador1= 0;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log("os jogadores são validos") :
console.log("os jogadores são invalidos");

//usando if

if (jogador > 0 && jogador === 0 ){
    console.log("jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
}

//usando else if

else if(jogador2 > 0 && jogador1 ==0){
    console.log("o jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
}

//usando else

else{
    console.log("ninguém marcou ponto")
}

//switch case

switch(placar){
    case placar = jogador1 > jogador2:
        console.log("jogaor 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("jogaor 2 ganhou");
        break;
        default:
        console.log("ninguém ganhou");

} */

//for - funciona como uma repetição de instrução até que a condição seja falsa

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

/* for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}
 */

//for in - funciona como uma repetição a partir de uma propriedade

/* for(let i in array){
    console.log(i);

}


//for in com object
for(i in object){
    console.log(i);

} */

//for of - funciona como uma repetição a partir de um valor
/* for(i of array){
    console.log(i);
} */

//for of nao funciona com objetos pois as propriedades variam, diferentes do índice em um array que sempre serão inteiros

//while - executa a instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da condição

/* var a = 0;

while(a < 10){
    a++;
    console.log(a);

} */

//do while - executa uma instrução "até que" determinada condição seja falsa; a verdadeira é feita depois da execução

var a = 0;
do{
    a++;
    console.log(a);

}while(a < 10)
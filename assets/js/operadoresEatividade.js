//operador de atribuição

/* 
= atribui valor

*/

//operadores de comparação
/* 
== igual a 
=== mesmo valor e mesmo tipo
!= diferente
!== valor e tipos diferentes
< menor que 
> maior que 
<= menor ou igual que
>= maior ou igual

*/

//operadores de lógica

/* 
&& "e" lógico, duas afirmações verdadeiras
|| "ou" lógico, uma das afirmações verdadeira
! "não" lógico, acessar resultado oposto do que esta passando (passar um !true, receber false)

*/


//condicional ternario
/* 

(condition) ? expression1 : expression2
a condição é verdadeira? se não, executa a primeira expressão, se a primeira (expression1) for falsa, executa a segunda expressao (expression2)

*/

function numbersComparison (num1, num2){
    let soma = num1 + num2;
    let comparisonDez = 'menor';
    let comparisonVinte = 'menor'; //valor padrao pra começar antes de verificar se é maior


    function somaNumbers (num1, num2){
        num1 = +num1;
        num2 = +num2;

        if(soma > 10){
            comparisonDez = 'maior';
        }

        if(soma > 20){
            comparisonVinte = 'maior';
        }
        return num1 + num2;

    }

    if(num1 == num2){
        console.log("Os números são iguais!");
    }else{
        console.log("Os números não são iguais");
    }

    return `A soma dos números é ${soma}, que é ${comparisonDez} do que 10 e ${comparisonVinte} do que 20;`

 

}
console.log(numbersComparison(10, 5));
function validaArray(arr, num){
    try{ //tentar validar, execução de instruções 
        //verificar se um parametro nao foi enviado/nao é verdadeiro
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== "object") throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== "number") throw new TypeError("Número precisa ser do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho inválido");

        return arr;

    }catch(e){ //se der erro vai ser tratado aqui
        //filtrando chamadas do catch por meio do instanceof
        if(e instanceof ReferenceError){ //instance of vai testar se o objeto 'e' tem a função construtora, no caso o ReferenceError
            console.log("Esse erro é um ReferenceError");
            //console.log(e.name); //nome do erro
            //console.log(e.stack); //linha do erro
            console.log(e.message); //mensagem do erro
        }else if (e instanceof  TypeError){
            console.log("Esse erro é um TypeError");
            console.log(e.message);
        }else if (e instanceof  RangeError){
            console.log("Esse erro é um RangeError");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

// console.log(validaArray()); - lançado sem parametros vai lançar ReferenceError
// console.log(validaArray(5,5)); - lançado sem ser objeto, vai lançar TypeError
// console.log(validaArray([],'a')); - lançado sem ser numero, vai lançar TypeError
//console.log(validaArray([],5)); - lançado sem ter 5 elementos no array, vai lançar RangeError
console.log(validaArray([1,2,3,4,5],5));

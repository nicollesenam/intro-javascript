//executa uma função em todos os elementos do array retornando em um valor único

//sintaxe
array.reduce(callback, initialValue); //valor sobre o qual o retorno final irá atuar
            //função a ser executada a partir do accumulator

                                        //elemento atual sendo acessado pela função
const callbackFn = function(accumulator, currentValue, index, array){
                            //acumulador de todas as chamadas da função callback (prevValue)
    //do something
}
array.reduce(callback, initialValue);
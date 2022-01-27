/* 
- cria um novo array
- não modifica o array criado
- realiza operações em ordem

 */

//sintaxe
array.map(callback, thisArg); //opcional, valor de this dentro da função callback
        //função a ser executada em cada elemento
            //callback(item,array)

//map x forEach
//usando map
const array = [1,2,3,4,5]
array.map((item) => item * 2;
//retorno = novo array = [2,4,6,7,10]              diferenças: - valor de retorno 
//                                                             - considerar array auxiliar, por exemplo no forEach que retornou undefined e precisará de uma constante pra armazenar o valor e dar retorno

//usando forEach
const array = [1,2,3,4,5]
array.forEach((item) => item * 2;
//retorno = undefined

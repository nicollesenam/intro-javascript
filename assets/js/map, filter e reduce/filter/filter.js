/* 
- como se colocasse o array num filtro e serão retornados apenas os itens que correspondem a determinada condição
- não modifica array original
- cria novo array

 */

//sintaxe
array.filter(callback, thisArg) //opcional, valor de this dentro de callback, usaria p/ variar valores
            //função a ser executada a cada elemento, geralmente é uma comparação

const frutas = ['maca verde', 'maca fuji', 'abacaxi', 'laranja'];
frutas.filter((fruta) => fruta.includes("maca") //precisa do metodo includes de string porque são duas palavras ("maça ...") e não apenas maça
//fruta é o item que pode ter qualquer nome
//retorno: ['maca verde', 'maca fuji']
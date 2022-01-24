// uma coleção de arrays no formato [chave, valor]
// pode ser iterado por um loop for...of 

const myMap = new Map();

//metodos - coleções chaveadas 
// adicionar, ler e deletar
myMap.set("apple", "fruit");
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// "fruit"

myMap.delete("apple");
// true

myMap.get("apple");
// undefined


//map x objeto
/* 
- map pode ter chave de qualquer tipo, o objeto sempre tem chaves no formato de string 
- maps possuem a propriedade length, no objeto tem que iterar por cada um deles pra saber o tamanho
- maps são mais faceis de iterar
- utilizado quando o valor das chaves é desconhecido, no objeto utiliza-se quando conhece o valor das chaves e acessa o valor pela chave. no map, usa quando não conhece e quer iterar por eles.
- maps tem o valor de mesmo tipo, no objeto não precisa ter valores do mesmo tipo

*/

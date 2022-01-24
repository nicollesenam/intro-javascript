//sets são etruturas que armazenam apenas valores únicos
//métodos - coleções chaveadas
//adicionar, consultar e deletar

const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
//true

mySet.has(3);
//false

mySet.delete(5);
mySet.has(5);


//set x array
/* 
- set possui valores únicos
- em vez da propriedade length, consulta-se o número de registros pela propriedade size no set
- não possui os métodos do array de map, filter, reduce etc. 
*/
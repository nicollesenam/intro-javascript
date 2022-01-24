//sintaxe
const helloWorld = () => {
    return "Hello World";
}

//ou com uma linha só, pode dispensar chaves e return
const helloWorld = () => "Hello World";
//caso exista so um parametro pode dispensar os parenteses
const soma = a => a;
soma(4);

//arrow function nao faz hoisting
/* 
- nao funcionará
soma(2,4)

const soma = (a,b) => a + b; 
*/

/* 
restrições

- this sempre será objeto global, metodos para modificar seu valor não vão funcionar (call, apply, bind)
- não existe o objeto "argumentos"
- o constructor (ex: new MeuObjeto()) não pode ser utilizado

*/
//spread (...variavel) - uma forma de lidar separadamente com elementos
//o que era parte do array se torna um elemento independente

function sum(x,y,z){
    return x + y + z;

}
const numbers = [1,2,3];
console.log(sum(...numbers));

//rest - combina os argumentos em um array
//o que era elemento independente se torna parte de um array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho(); //0
confereTamanho(1,2) //2
confereTamanho(3,4,5) //3

//objects
//object destructuring - desestruturação
//entre chaves, filtra-se apenas os dados que interessam no objeto
const user = {
    id:42,
    displayName: "jdoe",
    fullName:{
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){ //se fosse apenas fullName, iria retornar as propriedades dele, não os valores. 
    return `${first} ${last}`;
    //variaveis criadas pra chamar no return o nome e sobrenome
}

console.log (userId(user));
console.log (getFullName(user));

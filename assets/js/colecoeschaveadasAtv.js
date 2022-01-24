//map

function getAdmins(map){
    let admin = []; //array auxiliar para colocar os nomes dos que forem admin
    for([key, value] of map){ //para cada nome e valor do map criado (usuarios)
        if(value === "Admin"){ //se valor da key for igual a Admin
            admin.push(key); //o array auxiliar vai adicionar o valor da key/nome do usuário
        }
    }
    return admin; //retornar array para nao retornar undefined
} 

const usuarios = new Map(); //criando map

usuarios.set("Luiz", "Admin"); //adicionando item ao map com set
            //key      value
usuarios.set("Stephany", "Admin");
usuarios.set("Jorge", "User");
usuarios.set("Natália", "Admin");

console.log(getAdmins(usuarios)); //passando como argumento o map criado

// set

const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr); //criando set
    //return mySet; se pedir pra retornar assim, não criará um novo array, so colocará o set dentro de um array
    return [...mySet]; // usando rest (...), os elementos do set vão se tornar elementos de um novo array
}
console.log(valoresUnicos(meuArray));
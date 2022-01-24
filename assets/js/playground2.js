function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade `;
}

const pessoa1 ={
    nome: "Maria",
    idade: 30,
};

const pessoa2 ={
    nome: "Carla",
    idade: 26,
};

const animal ={
    nome: "Fiona",
    idade: 5,
    raca: "pug",
};

console.log(calculaIdade.call(pessoa2, 30));
                        //passando como argumento o objeto que call vai referir o nome e os anos como argumento
console.log(calculaIdade.apply(animal, [7]));
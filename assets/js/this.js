//this é uma palavara reservada como referência de contexto
const pessoa ={
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){ //função dentro de objeto = método
        return this.firstName + " " + this.lastName; // this se referindo ao objeto pessoa
                //retornar firstName do objeto pesssoa
    },
    getId: function(){
        return this.id;
    }
}

pessoa.fullName();
//"André Soares"
pessoa.getId();
//1


// ------------------ manipulando valor de this ---------------
//call - usa-se pra colocar objeto que o this vai se referir
const pessoa ={
    nome: "Miguel"
};

const animal ={
    nome: "Murphy"
};

function getSomething(){
    console.log(this.nome); // entao, por causa do call apontando para pessoa, this vai passar a se referir a pessoa e a propriedade nome que vai retornar é nome de pessoa, no caso Miguel
}

getSomething.call(pessoa); //call (objeto ao qual quer que o this se refira)
//retorna Miguel

const pessoa ={
    nome: "Miguel"
};

const animal ={
    nome: "Murphy"
};

function getSomething(){
    console.log(this.nome);// entao, por causa do call apontando para animal, this vai passar a se referir a animal e a propriedade nome que vai retornar é nome de animal, no caso Murphy
}

getSomething.call(animal);
//retorna Murphy

//é possivel passar parametros para essa função separando-os por vírgulas
const myObj ={
    num1: 2,
    num2: 4,
};

function soma (a,b){
    console.log(this.num1 + this.num2 + a + b);
    //this vai passar a se referir às propriedades do myObj
    // 2 + 4 + 1 + 5
}

soma.call(myObj, 1, 5);//os argumentos de um apply sao mandados separados por virgula
//passando o objeto ao qual o this vai se referir no caso myObj 
//e passando os valores que a função pede como parametros 1 e 5 pra a e b

//12


//apply - parecido com call
const pessoa ={
    nome: "Miguel"
};

const animal ={
    nome: "Murphy"
};

function getSomething(){
    console.log(this.nome); // entao, por causa do apply apontando para pessoa, this vai passar a se referir a pessoa e a propriedade nome que vai retornar é nome de pessoa, no caso Miguel
}

getSomething.apply(pessoa); //apply (objeto ao qual quer que o this se refira)
//retorna Miguel

const pessoa ={
    nome: "Miguel"
};

const animal ={
    nome: "Murphy"
};

function getSomething(){
    console.log(this.nome);// entao, por causa do apply apontando para animal, this vai passar a se referir a animal e a propriedade nome que vai retornar é nome de animal, no caso Murphy
}

getSomething.apply(animal);
//retorna Murphy

//é possivel passar parametros para essa função *dentro de um array*

const myObj ={
    num1: 2,
    num2: 4,
};

function soma (a,b){
    console.log(this.num1 + this.num2 + a + b); 
    //this vai passar a se referir às propriedades do myObj
    // 2 + 4 + 1 + 5
}

soma.apply(myObj, [1, 5]); //os argumentos de um apply sao mandados dentro de array
//passando o objeto ao qual o this vai se referir no caso myObj 
//e passando os valores que a função pede como parametros 1 e 5 pra a e b

//12


//bind - clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
const retornaNomes = function (){
    return this.nome;
};

let bruno = retornaNomes.bind({nome: "Bruno"}); // a função retornaNomes é "clonada" pra dentro de uma variavel chamada bruno e é passado a propriedade declarada dentro da função

bruno(); //chama-se o clone da variável
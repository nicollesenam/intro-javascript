const alunos = [ //ARRAY COM OBJETOS 
    {
        nome: "joão", 
        nota: 5,
        turma: "1B",
    },
    {
        nome: "sofia",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "Paulo",
        nota: 6,
        turma: "2C",
    },

    {
        nome: "Miguel",
        nota: 4,
        turma: "2C",
    },

];

function alunosAprovados(arr, media){
    let aprovados = [];

    //object destructuring
    //colocar entre chaves as propriedades e igualar ao objeto, que é o aluno no array
    //const {nota, nome} = arr[i];


    for(let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i]; //selecionando apenas propriedades importantes
        if(nota >= media){ //aluno representado pelo indice do array
            //se nota do aluno for maior ou igual a media
            aprovados.push(nome); //entao nome do aluno vai ser acrescentado no array aprovados
            
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5))
//função autoinvocável
//função anonima entre parenteses seguida por outro parenteses que representa a sua chamada
(
    function(){
        let name = "teste"
        return name;
    }
)();

//tambem pode ser utilizada com parametros ou armazenada em uma variável
(
    function(a,b){
        return a + b;
    }
)(1,2);


//função callback
//função passada como argumento para outra

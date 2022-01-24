var firstName = "João";
var lastName = "Souza";

if(firstName === "João"){
    var firstName = "Pedro";
    let lastName = "Silva";

}

console.log(firstName,lastName);
//aparece so Pedro Souza, Silva nao aparece porque esta com let e let é declarado com escopo local
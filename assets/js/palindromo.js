//solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";
    //se string for diferente de verdadeiro vai retornar string inexistente
    return string.split("").reverse().join("") === string;
    //vai retornar separados por espaço com split, o reverse vai reverter a palavra pra retornar ao contrario e o join vai juntar cada uma das letras separadas e === string pra ver se a string revertida é igual a string que vc recebeu
}
let myVar = null;
console.log(verificaPalindromo("ama"));

//solução 2
// omo - comparar se caractere do indice 0 é igual a ultimo indice
// 012 - indice
// 123 - length (tamanho = 3)
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
            return false;
        }
    }
    return true;

}

console.log(verificaPalindromo2("omo"));
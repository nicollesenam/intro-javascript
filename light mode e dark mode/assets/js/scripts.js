//função principal para chamar as outras
function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){ //toggle para adicionar classe dark mode caso nao tenha e se tiver é pra remover
    btn.classList.toggle("dark-mode"); //colocando classe dark mode criada no css
    titulo.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
}

function changeText(){
    const ligthMode = "Ligth Mode ON";
    const darkMode = "Dark Mode ON";
    if(body.classList.contains("dark-mode")){ //verificando se o classlist do body tem a classe dark mode
        btn.innerHTML = ligthMode;
        titulo.innerHTML = darkMode;
    }else{
        btn.innerHTML = darkMode;
        titulo.innerHTML = ligthMode
    }
} 

//selecionando elementos titulo, body, footer e botão

const titulo = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0]; 
//chamada retorna uma coleção do body
//para selecionar o body tem que ser pelo indice no caso [0]
const footer = document.getElementsByTagName("footer")[0];
const btn = document.getElementById("mode-selector");

//acrescentando evento de clique no botao para executar função quando clicar
btn.addEventListener("click", changeMode);



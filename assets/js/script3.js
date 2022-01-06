/* var btn = document.getElementById("addButton"); //selecionando botao
var taskName = document.getElementById("task-name"); //selecionando input
var typed = ""; //variavel criada para colocar texto digitado
var taskLi = document.querySelector("task-li");
começar to do list com checkbox escondida
var checkbox = document.querySelector("#checkbox");
checkbox.style.visibility = "hidden"; 

btn.addEventListener("click", function(){
    type(); //ao clicar no botão selecionado irá executar função type
   

});

function type(){
    createli();
    typed = document.getElementById("task-name").value; // variavel vai ser igual ao valor recebido no input
        
    if (taskName.value !== ""){
            document.querySelector("li").innerHTML = typed;
            //selecionando li e colocando o texto digitado
            checkbox.style.visibility = "visible";
    }else{
        if(taskName.value === ""){
            console.log("a")
            btn.disabled = true;
        }
    
    } 
} 


function createli(){ //adicionar tarefa
    //criar li para cada texto digitado
    var ul = document.getElementById("task-list"); //selecionando ul para servir de pai para o elemento li criado ser inserido
    var li = document.createElement("li"); //li criada
    li.innerHTML = taskName.value;
    taskName.appendChild(li);
    li.appendChild(document.createTextNode(document.querySelector("li").innerHTML = typed));
            //usando create Text Node para colocar um valor, no caso, colocando valor digitado na li
            //podia ser:
            //var li = document.createElement("li");
            //var texto = document.createTextNode("texto");
            //e anexa o texto no elemento com li.appendChild("texto") <- nesse caso é o typed
    ul.appendChild(li);
    //colocando li dentro do pai ul
    var check = document.createElement("check");
    li.appendChild(check);
}
 */
var taskName = document.getElementById("task-list"); //selecionando ul


function addTask() {
    if (document.getElementById("task-name").value !== "") { //selecionando input e verificando se o valor recebido pelo input esta vazio
        var task = document.createElement("li"); //criando li/ tarefa
        task.innerHTML = document.getElementById("task-name").value; //mudando o inner html da tarefa para o valor digitado no input
  
        var remove = document.createElement("a");
        remove.innerHTML = " X";
        remove.onclick = function() {
            // remove apenas "task", que é o li
            taskName.removeChild(task);
        }

        // adiciona o link de remover ao li
        task.appendChild(remove);
        // adiciona o li ao ul
        taskName.appendChild(task);
        document.getElementById("task-name").value = "";
    }
}
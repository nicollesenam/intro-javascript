//number() - para converter valores em números
//prompt() - para registrar entradas de usuário
//alert() - para mostrar mensagem ao usuário
//template string - para usar string junto com expressões {`$`}

function calculadora(){
    const operacao = prompt("Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)");
    console.log(operacao);

    if(!operacao || operacao >= 7){
        alert("operação inválida!");
        calculadora();

    }else{
    let n1 = Number(prompt("insira o primeiro valor:")); //number() converte
    let n2 =  Number(prompt("insira o segundo valor:"));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert (`${n1}+ ${n2} = ${resultado} `);
        novaOperacao();

    }

    function subtracao(){
        resultado = n1 - n2;
        alert (`${n1} - ${n2} = ${resultado} `);
        novaOperacao();

    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert (`${n1} * ${n2} = ${resultado} `);
        novaOperacao();

    }

    function divisaoReal(){
        resultado = n1 / n2;
        alert (`${n1} / ${n2} = ${resultado} `);
        novaOperacao();

    }

    function divisaoInteira(){
        resultado = n1 % n2;
        alert (` o resto entre ${n1} e ${n2} é = ${resultado} `);
        novaOperacao();

    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert (`${n1} elevado a ${n2}  é = ${resultado} `);
        novaOperacao();

    }

    function novaOperacao(){
        let opcao = prompt("deseja fazer outra operação?\n 1 - Sim\n 2 -  Não");

        if(opcao == 1){
            calculadora();
        }else if (opcao == 2){
            alert("até mais");
        }else{
            alert("digite um valor válido!");
            novaOperacao();
        }
    }


    if (operacao == 1){
        soma();
    } else if (operacao == 2){
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    } else if (operacao == 4){
        divisaoReal();
    }else if (operacao == 5){
        divisaoInteira();
    } else if (operacao == 6){
        potenciacao();
    }

    }

    
}
calculadora();
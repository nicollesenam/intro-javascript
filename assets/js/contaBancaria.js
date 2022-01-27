class contaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia = agencia; //this se refere a conta bancaria
                    //agencia vai ser igual a agencia que será definida depois ao instanciar
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //quando usar get e set em uma propriedade, coloca-se _ na frente para que o get e set tenham o nome saldo mas a propriedade não
    }
    
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){ //verificar se o valor que quer sacar é maior que o saldo
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor; //saldo = saldo - valor que vai ser sacado
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}

class contaCorrente extends contaBancaria{ //classe filha da classe pai contaBancaria
    constructor(agencia,numero, saldo, cartaoCredito){ //mandar tudo que recebeu para 
        super(agencia,numero, saldo); //a classe pai com super
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;

    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}


class contaPoupanca extends contaBancaria{ //classe filha da classe pai contaBancaria
    constructor(agencia,numero){
        super(agencia,numero); 
        this.tipo = "poupança";

    }
}

class contaUniversitaria extends contaBancaria{ //classe filha da classe pai contaBancaria
    constructor(agencia,numero){
        super(agencia,numero); 
        this.tipo = "universitária";

    }

    sacar(valor){ //sobrescrever metodo sacar existente
        if(valor > 500){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;
    }
}


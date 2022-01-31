# Conheça este repositório! :open_file_folder:
Criado no intuito de armazenar arquivos de estudo e projetos do curso de JavaScript do Bootcamp MRV Fullstack Developer.

# Contador
Projeto de contador com auxílio da mentora Stephany Nusch, em que o mesmo possui as seguintes funções: </br>
<ol>
  <li>Incrementar</li>
  <li>Decrementar</li>
  <li>Desabilitar botão de incrementar ao atingir número 10</li>
  <li>Desabilitar botão de decrementar ao atingir número -5</li>
</ol>

O projeto possui o [código javascript ensinado na aula](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/script.js) e a resolução do [desafio proposto](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/script2.js) implementando as funções acima.

# To do List Simples

Projeto de todo list com auxílio da mentora Stephany Nusch, em que o mesmo possui as seguintes funções: </br>

<ol>
  <li>Adicionar Tarefa</li>
  <li>Remover Tarefa (clicando na mesma e/ou no "X")</li>
</ol>

# Calculadora Simples
Calculadora desenvolvida com auxílio da mentora Diana Martine, que possui as seguintes funcionalidades:
<ol>
  <li>Operações de soma, multiplicação, subtração, divisão e potenciação</li>
  <li>Validação de valores</li>
  <li>Validação de operação</li>
  <li>Menu com opções</li>
</ol>

# Funções
Projetos referentes ao curso "Funções" do Bootcamp com auxílio da mentora Stephany Nusch.

### [Atividade 1: Alunos Aprovados](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/playground.js)
<ol>
  <li>Crie uma função que recebe o array alunos e um número que irá representar a média final;</li>
  <li>Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;</li>
  <li>Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.</li> 
</ol>

### [Atividade 2: This](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/this.js)
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.

```javascript
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```
# Variáveis e Tipos
Atividades práticas do curso "Variáveis e Tipos" do Bootcamp com auxílio da mentora Stephany Nusch.

### [Atividade 1: Palíndromo](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/palindromo.js)
Atividade para verificar, de duas maneiras diferentes, se uma String é palíndromo.

### [Atividade 2: Elementos pares e diferentes de 0](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/arraypares.js)
Atividades em que era necessário trocar elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retornar -1.
<br />Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90] <br />
Output -> [1, 3, 0, 0, 0, 33, 23, 0]<br />
Input -> [] <br />
Output -> -1 <br />

# Sintaxe e Operadores
Atividade prática do curso "Sintaxe e Operadores" do Bootcamp com auxílio da mentora Stephany Nusch.

## [Atividade](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/operadoresEatividade.js)
<ol>
  <li>Crie uma função que recebe dois números como parâmetros</li>
  <li>Confira se os números são iguais</li>
  <li>Confira se a soma dos números é maior que 10 ou menor que 20</li>
  <li>Retorne uma string dizendo "Os números <code>num1</code> e <code>num2</code> não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". </li>
</ol>

Exemplo:
```
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.

```

# Coleções Chaveadas
Atividade prática do curso "Coleções Chaveadas" do Bootcamp com auxílio da mentora Stephany Nusch.

## [Atividade 1: Maps](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/map.js)
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
<ol>
  <li>Crie uma função <code>getAdmins</code> que recebe um Map;</li>
  <li>Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');</li>
  <li>Dentro de getAdmins, utilize o loop <code>for...of</code> para retornar uma lista com os nomes dos usu;arios que são administradores.</li>
</ol>

## [Atividade 2: Sets](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/set.js)
    Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.


# Tratamento de Erros
Projeto referente ao curso "Debugging e Error Handling" do Bootcamp com auxílio da mentora Stephany Nusch.

## [Atividade: validação de erros por tipo](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/debugError.js)
<ol>
  <li>Crie uma função que recebe um array e um número</li>
  <li>Realize as seguintes validações
    <ol>
      <li>Se os parâmetros não forem enviados, lance um erro do tipo <code>ReferenceError</code></li>
      <li>Se o array não for do tipo 'object', lance um erro do tipo <code>TypeError</code></li>
      <li>Se o número não for do tipo 'number', lance um erro do tipo <code>TypeError</code></li>
      <li>Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo <code>RangeError</code></li>
    </ol>
  </li>
  <li>Utilize a declaração <code>try...catch</code></li>
  <li>Filtre as chamadas de catch por cada tipo de erro utilizando o operador <code>instanceof</code></li>
</ol>

# Map, Filter e Reduce
Atividades práticas do curso "Map, Filter e Reduce" do Bootcamp com auxílio da mentora Stephany Nusch.

## [Atividade: Map](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/map%2C%20filter%20e%20reduce/map/atividade.js)
- Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro <code>this</code> de um objeto criado por você, e depois sem ele.
## [Atividade: Filter](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/map%2C%20filter%20e%20reduce/filter/atividade.js)
- Filtre e retorne todos os números pares de um array.
## [Atividade: Reduce](https://github.com/nicollesenam/intro-javascript/blob/master/assets/js/map%2C%20filter%20e%20reduce/reduce/atividade.js)
<ol>
  <li>Some todos os números de um array</li>
  <li>Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.</li>
</ol>

# Projeto Light Mode e Dark Mode
Projeto realizado com auxílio da mentora Stephany Nusch manipulando o DOM.

![ligthmodedarkmode](https://user-images.githubusercontent.com/82225853/151831861-711a673f-fb90-4c4d-82e4-412b17a46e26.gif)

O código fonte pode ser visualizado [aqui](https://github.com/nicollesenam/intro-javascript/tree/master/light%20mode%20e%20dark%20mode).

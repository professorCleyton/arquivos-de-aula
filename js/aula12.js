/*
Spread Operator;
Rest Operator;
Default Operator;
A importância de nomear bem uma função;
*/

// REFERENCIA DE MEMÓRIA
{
  let objetoPessoa1 = { nome: "Cleyton" };
  let objetoPessoa2 = objetoPessoa1;
  //console.log(objetoPessoa2);
  objetoPessoa2.nome = "Guilherme";
  //console.log(objetoPessoa1,objetoPessoa2);
}

// USO DO SPREAD PARA COPIAR O OBJETO
{
  let objetoPessoa1 = { nome: "Cleyton" };
  let objetoPessoa2 = { ...objetoPessoa1 };
  //console.log(objetoPessoa2);
  objetoPessoa2.nome = "Guilherme";
  //console.log(objetoPessoa1,objetoPessoa2);
}

/*
PROBLEMA:
Tenho um array com 3 posições, todas elas são numeros que eu gostaria de somar.
Como eu consigo fazer isso utilizando função?
*/
{
  const numbers = [1, 2, 3];

  function somaNumeros(arrNumbers) {
    // Deve retornar número
    let resultado = 0;
    for (let posicao of arrNumbers) {
      resultado += posicao;
    }
    return resultado;
  }

  //console.log(somaNumeros(numbers));
}

// SE EU USAR SPREAD OPERATOR?
{
  // EXEMPLO DE SPREAD OPERATOR
  function somaNumeros(argumento1, argumento2, argumento3) {
    return argumento1 + argumento2 + argumento3;
  }

  const numeros = [1, 2, 3];

 // console.log(somaNumeros(...numeros));
  //console.log(somaNumeros(1,4,3));
  // expected output: 6
}

//EXEMPLO DE OUTRA COISA QUE CONSIGO FAZER COM SPREAD OPERATOR
// COPIAR ARRAYS SEM USAR SLICE
{
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()
}
//ADICIONAR POSIÇÕES DE UM ARRAY COM OUTRO ARRAY
let pedacoDaMusica = ["ombro", "joelho"];
let cantando = ["cabeça", ...pedacoDaMusica, "e", "pé"];
//console.log(cantando)
cantando[2] = "testa";
//console.log(pedacoDaMusica);
//console.log(cantando);
//PROBLEMA

// EXEMPLO COM REST OPERATOR
function multiplicacao(tabela, multiplos) { // retorna um array
  let resultado = [];
  let contador = 0;
  for (let multiplo of multiplos) {
    resultado[contador] = tabela * multiplo;
    contador++;
  }

  return resultado;
}

const multiplicadores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log('Tabela do 2', multiplicacao(2,multiplicadores));


function fun1(...array) {
  //console.log(array);
}

// fun1();  // 0
// fun1(5); // 1
// fun1(5, 6, 7); // 3

/* MAP Vamos ver na proxima*/
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]


{
  function exibirEsomar1(resultado){
    //console.log(resultado+1);
  }

  function somaERetorna(a,b){
    return a+b;
  }

  //exibirEsomar1(somaERetorna(1,2));
}

// DEFAULT OPERATOR
{
  function multiply(a, b=0) { // number
    b = (typeof b !== 'undefined') ? b : 0;
  
    return a * b;
  }
  
  console.log(multiply(5, 2)); // 10
  console.log(multiply(5, 1)); // 5
  console.log(multiply(5));   
}

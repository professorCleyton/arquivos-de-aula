// TEMAS 

// COMANDOS DE SAIDA
alert('Aulão do Cleyton!');
console.log("Testando console");
prompt('Digite seu nome:');

// DECLARACAO DE VARIAVEIS 
var variavel = 'Uma variavel é um espaço na memória';
let varavel2 = 'Utilizada para guardar uma informação';
const variavel3 = 'Essas são as formas que podemos declarar';

// ESCOPO 1
{ //Calculadora 1 Soma
    "use strict";
    const mensagemBonita = "Sucesso, você somou 2 números!";
    let recebePrimeiroNumero = 0; // INICIALIZO COMO NUMERO
    let recebeSegundoNumero = 0; // INICIALIZO COMO NUMERO

    recebePrimeiroNumero = prompt('Digite o primeiro número');
    recebeSegundoNumero = prompt('Digite o segundo número');
    console.log(mensagemBonita);
    console.log(parseInt(recebePrimeiroNumero)+parseInt(recebeSegundoNumero));
}
// ESCOPO 2
{// Calculadora 2 Subtracao
    //inicializando variaveis
    const mensagemUsuario = "Seu resultado é:"
    let primeiroNumeroSubtracao = 0;
    let segundoNumeroSubtracao = 0;
    let resultadoSubtracao = 0;

    primeiroNumeroSubtracao = 10; 
    segundoNumeroSubtracao = 5;
    resultadoSubtracao = primeiroNumeroSubtracao - segundoNumeroSubtracao;
    alert(mensagemUsuario + resultadoSubtracao);
}



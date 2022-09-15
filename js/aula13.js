
{
    // REVISANDO FUNÇÃO 
    function validaVogal (letra){ // Retorne boleano
        if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
            return true;
        }
        return false;
    }

    //let recebeLetra = prompt('Digite uma letra:');
    //let validacaoVogal = validaVogal(recebeLetra.toLowerCase());
    //let validacaoVogal2 = validaVogal(1);
    
    // console.log('É uma vogal:',validacaoVogal);
    // console.log('É uma vogal:',validacaoVogal2);
}

// FUNÇÕES CALLBACK
/*
Uma função callback é uma função passada a outra função como argumento, 
que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

*/
{
  function exibeTexto(texto) { // VOID
    alert("Olá " + texto);
    console.log("Olá " + texto);
  }

  function processaTexto(funcaoCallBack) { // VOID
    //var texto = prompt("Por favor insira seu texto.");// se esse texto viesse de uma API
    funcaoCallBack(texto); // Isso só aconteceria após o retorno do texto
  }

  // processaTexto(exibeTexto); // RECEBENDO UMA FUNÇÃO COMO PARÂMETRO
}
/*
Note, no entanto, que callbacks 
são normalmente utilizados para continuar a execução do código 
após uma operação asynchronous ser terminada
*/

/* PROBLEMA 
vamos construir uma função que soma dois números recebidos pelo usuário, e recebe 
como parâmetro uma função de callback para exibir o resultado*/
{
    let exibeResultadoOperacao = (resultado) =>{ // VOID 
        console.log(resultado);
    }
    
    let somaDoisNumeros = (exibeResultado) =>{ //VOID
        let recebePrimeiroNumero = 5
        let recebeSegundoNumero = 5
        let resultado = recebePrimeiroNumero + recebeSegundoNumero;
        exibeResultado(resultado);
    }

    somaDoisNumeros(exibeResultadoOperacao);
}



// ARROW FUNCTION
/*
Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, 
e elas não podem ser usadas como construtoras (constructors).
*/

let somaNumeros = function(primeiroNumero,segundoNumero){
    return primeiroNumero + segundoNumero;
}
//console.log(somaNumeros(1,1));

let somaDoisNumeros = (a, b) => a + b; // com retorno
//console.log(somaDoisNumeros(1,1));

let exibeOi = (texto) => alert(texto); // Sem retorno
//exibeOi('Oi Kaik Bonitao');

let somaDoisNumerosOutroModelo = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };

/*
somaDoisNumeros(1,1);
exibeOi();
somaDoisNumerosOutroModelo(1,1);
*/

/* Vamos construir uma arrow function? */

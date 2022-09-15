/*
FUNÇÃO É BLOCO DE CÓDIGO QUE DEFINE INSTRUÇÕES ÚNICAS E BEM DEFINIDAS
A SEREM EXECUTADAS, QUE PODEM OU NÃO TER UM RETORNO.
*/

let pessoa = {
  nome: "Cleyton",
  idade: "31 anos",
  profissao: "professor",
};
//console.log(pessoa);

// EXEMPLO DE FUNÇÃO VOID OU SEM RETORNO
function exibeMensagemNoConsole() {
  console.log("Mensagem da função");
  console.log("Mensagem da função");
  console.log("Mensagem da função");
  console.log("Mensagem da função");
  console.log("Mensagem da função");
  console.log("Mensagem da função");
  console.log("Mensagem da função");
  console.log("Mensagem da função");
  console.log("Mensagem da função");
}

// exibeMensagemNoConsole();
{
  // EXEMPLO DE FUNÇÃO COM RETORNO - SEM PARAMETROS ou ARGUMENTOS
  function somaDoisNumeros() {
    let somaDoisNumeros = 2 + 2;
    return somaDoisNumeros;
  }

  let recebeResultado = somaDoisNumeros();
  // console.log(recebeResultado,somaDoisNumeros());
}

{
  // EXEMPLO DE FUNÇÃO COM RETORNO - COM PARAMETROS ou ARGUMENTOS
  function somaDoisNumeros(recebePrimeiroNumero,recebeSegundoNumero) {
    let somaDoisNumeros = 0;
    if(!isNaN(recebePrimeiroNumero) && !isNaN(recebeSegundoNumero)){
        somaDoisNumeros = recebePrimeiroNumero + recebeSegundoNumero;
    }
    return somaDoisNumeros;
  }

  let soma = somaDoisNumeros('dois','dois');
//   console.log('Primeira Soma',soma+2);
//   console.log('Segunda Soma',somaDoisNumeros(10,10)+2);

}

{
    function maioridadePenal(idade){ // retorna boolean
        let maiorDeIdade = false;
        let maioridade = 18;
        if(!isNaN(idade) && idade >= maioridade){
            maiorDeIdade = true;
        }
        return maiorDeIdade;
    }
  /*
    console.log('Kayk é maior?',maioridadePenal(19));
    console.log('Paulo é maior?',maioridadePenal(17));
    console.log('Cleyton é maior?',maioridadePenal('teste'));
    */

    function validaNumero(numero){ // boolean
        let numeroValido = false;
        if(!isNaN(numero)){
            numeroValido=true;
        }
        return numeroValido;
    }

    let idade = 19;
    let validaNumeroRecebido = validaNumero(idade) ? idade: '';
    console.log(validaNumeroRecebido);
    
//     if (validaNumero(idade)){
//         console.log('É maior de idade?',maioridadePenal(idade));
//     }else{
//         console.log('Idade inválida!');
//     }

//     function parOuImpar(numero){ // retorna string "é par" ou "é impar"
//         let parOuImpar = 'Não foi digitado um número!';
//         if(!isNaN(numero)){
//             if(numero%2!=0){
//                 parOuImpar = 'É ímpar';
//             }else{
//                 parOuImpar = 'É par';
//             }
//         }
//         return parOuImpar;
//     }
    
//     console.log('2',parOuImpar(2));
//     console.log('5',parOuImpar(5));
//     console.log('texto',parOuImpar('texto'));
}

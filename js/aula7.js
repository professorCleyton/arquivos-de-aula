
//Exemplo de for
{
    for (let i = 0; i < 9; i++) {
        console.log(i);
     }
}
// Números ímpares
// 1 - Gostaria de receber um numero do usuario e determinar quantos números impares
// nós temos no intervalo de 0 até o numero recebido
// 2 - Gostaria de exibir a sequência de números ímpares no intervalo analisado
{
    // let recebeNumero = Number(prompt("Digite um número:"));
    let quantidadeDeImpares = 0;
    // Inicializando laço
    for(let contador=0; contador<recebeNumero; contador++){
        if(contador%2!=0){
            quantidadeDeImpares++;
            //console.log('Sequencia',contador)
        }
    }
    //console.log('Quantidade de ímpares', quantidadeDeImpares);
}

// ARRAY - VETOR
{
    //let vogais = ['a','e','i','o','u'];
    //let numerosImpares = [1,3,5,7,9,11];
    let frutasTropicais = prompt('Digite uma lista de frutas separadas por |');
    frutasTropicais = frutasTropicais.split('|');
    for (const element of frutasTropicais) {
          console.log(element);
    }
    let contador = 0;
    // Exemplo usando while
    console.log('Tamanho do array',frutasTropicais.length);
    while(contador<frutasTropicais.length){
        console.log(frutasTropicais[contador]);
        contador ++;
    }
}
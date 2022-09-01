
{ // EXEMPLO SIMPLES DE REPETIÇÃO
    let contador = 1;
    let segundoNumero = 0;

    while (contador < 3) {
        console.log(contador,segundoNumero);
        contador++; // Incremento
        segundoNumero += contador; 
        // segundoNumero = segundoNumero + primeiroNumero; 
    }
}

// 0 - 100
{
    let recebeNumero = Number(prompt('Digite um número:'));
    let contador = 0;
    let quantidadeDeImpares = 0;

    while(contador<=recebeNumero){
        if(contador%2 != 0){
            console.log('Sequencia ímpar',contador);
            quantidadeDeImpares++; // INCREMENTO +1
        }
        contador++;
    }
    console.log('Quantidade de ímpares',quantidadeDeImpares);
}

{
    let result = '';
    let i = 10;
    do {
    i += 1;
    result += `${i} `;
    }
    while (i > 0 && i < 5);
    // Despite i === 0 this will still loop as it starts off without the test

    console.log(result);
}

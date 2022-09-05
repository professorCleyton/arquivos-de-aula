// Precisamos criar um array de times
// Criar um array com os resultados
// Colocar valores nos resultados
// Somar o valor dos pontos com base nos resultados
// Imprimir o resultado

{
    const tabela = [['Time 1','V','V','E','D','D'],
                    ['Time 2','V','V','E','E','V'],
                    ['Time 3','V','V','V','E','V'],
                    ['Time 4','V','V','E','D','V'],
                    ['Time 5','D','D','D','E','V'],
                    ['Time 6','V','D','E','V','V'],
                   ];

    for(let linha of tabela){
        let pontuacao = 0;
        for(let coluna of linha){
            if(coluna=='V'){
                pontuacao += 3;
            }else if(coluna=='E'){
                pontuacao +=1;
            }
        }
        linha.push(pontuacao);
    }
    for(let linha of tabela){
        let ultimoItem = linha.length -1;
        console.log(linha[0],linha[ultimoItem]);
    }
}


{
    const frutas = ['Banana','Maçã','Abacaxi'];
    console.log(frutas.sort());
}
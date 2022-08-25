{
    // ENTENDENDO ATRIBUIÇÃO, COMPARAÇÃO DE VALOR E COMPARAÇÃO DE VALOR E TIPO
    let minhaMochila1 = 'Caderno';
    let minhaMochila2 = 'Livro';
    let comparaMochila;

    // COMPARANDO VALORES
    comparaMochila = minhaMochila1 == minhaMochila2;
    //console.log('Mochila1 ='+ minhaMochila1 + ' Mochila2='+ minhaMochila2 +' '+comparaMochila);

    // COMPARANDO VALORES E TIPO
    minhaMochila2 = 'Caderno';
    comparaMochila = minhaMochila1 === minhaMochila2;
    //console.log('Mochila1 ='+ minhaMochila1 + ' Mochila2='+ minhaMochila2 +' '+comparaMochila);

    //VERIFICANDO SE OS VALORES SÃO DIFERENTES
    minhaMochila2 = 'Caderno';
    comparaMochila = minhaMochila1 != minhaMochila2;
    //console.log('Mochila1 ='+ minhaMochila1 + ' Mochila2='+ minhaMochila2 +' '+comparaMochila);

    //VERIFICANDO SE OS VALORES E TIPOS SÃO DIFERENTES
    minhaMochila2 = 'Celular';
    comparaMochila = minhaMochila1 !== minhaMochila2;
    //console.log('Quarto resultado', comparaMochila);
}

{
//COMPARANDO NÚMEROS
    let idadeCleyton = 31;
    let idadeKayk = 19;
    let idadeFabioMoura = 35;
    let maisVelho;

    //CLEYTON É MAIS VELHO QUE KAYK?
    maisVelho = idadeCleyton > idadeKayk;
    //console.log('Cleyton é mais velho que kayk?',maisVelho);

    //CLEYTON É MAIS VELHO QUE O KAYK E O FABIO?
    maisVelho = idadeCleyton > idadeKayk && idadeCleyton > idadeFabioMoura;
    //console.log('Cleyton é mais velho que kayk e fabio?',maisVelho);

    //CLEYTON É MAIS VELHO QUE O KAYK OU FABIO?
    maisVelho = idadeCleyton > idadeKayk || idadeCleyton > idadeFabioMoura;
    //console.log('Cleyton é mais velho que kayk OU fabio?',maisVelho);
}   

{
    // TOMANDO DECISÕES NO NOSSO CÓDIGO
    //MAIORIDADE PENAL
    let idadePessoa = 18;
    let maioridadePenal = 18;
    let mensagem = '';
    if(idadePessoa>=maioridadePenal){
        mensagem = 'Pode ser preso!';
        // console.log(mensagem);
        // alert(mensagem);
    }else{
        mensagem = 'Pode ir pra fundação casa!';
        // console.log(mensagem);
        // alert(mensagem);
    }
}

// REVELA SE O NUMERO É PAR OU IMPAR
{
    let recebeNumero = 11;
    //Usando ternario
    //let verificaSePar = recebeNumero%2==0 ? 'É par!' : 'É ímpar!' ; // ternario
    //console.log(recebeNumero, verificaSePar);
    let verificaSePar = recebeNumero%2==0;
    
    if(!verificaSePar){// Verifica se não é par!
        console.log(recebeNumero,'É ímpar!');
    }else{
        console.log(recebeNumero,'É par!');
    }

}
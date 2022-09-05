{
    let professor = 'Cleyton';
    const alunos = new Array();
    const frutas = ['Banana','Maçã'];
    //Atribuindo

    // Inserindo no final
    alunos.push('Geovana','Kayk');
    alunos.push('Elis','João');
    // Inserindo no inicio do array
    alunos.unshift('Charle','Mateus Paim','Rhaidy');

    // Fazendo uma cópia de um array para outra variavel array
    const copiaAlunos = alunos.slice();

    // console.log('Lista antes da exclusão');
    // for(let aluno of alunos){
    //     console.log(aluno);
    // }

    // Descobrindo a posição de um item
    let posicao = alunos.indexOf('Elis');
    console.log('Posição da Elis',posicao);

    // Removendo itens com base em uma posição de partida
    alunos.splice(posicao,2);

    // Removendo o último item
    alunos.pop();
    // Removendo o primeiro item
    alunos.shift();

    // console.log('Lista pós exclusão');
    // for(let aluno of alunos){
    //     console.log(aluno);
    // }

 


    // exibindo
    console.log('Array após exclusão',alunos);
    console.log('Cópia do Array antes da exclusão',copiaAlunos);
}

/*
Eu tenho uma turma com 10 alunos, e gostaria de armazenar as notas de cada aluno 
e exibir a média deles. 
São 3 notas para cada aluno.
Quero exibir da seguinte forma no console:
Nome do aluno | nota1 | nota2 | nota3 | média: valor da média

EX:
Cleyton | 10 | 9 | 5 | média: 8
*/

{
    const alunos = ['Elis','Geovana','Kayk','Charle','Mateus Paim','Rhaidy',
    'Fabio','Paulo','Vicente','Gabriel'];
    const notasAlunos = ['10,8,7','5,3,10','1,2,5','10,10,5','5,5,5','10,1,0',
    '8,7,6','0,10,8','0,0,1','5,0,1'];
    let contador = 0;

    for(let aluno of alunos){
        let arrayNotas = notasAlunos[contador].split(',');
        let mediaAluno = Number(arrayNotas[0]) + Number(arrayNotas[1]) + Number(arrayNotas[2]);
        mediaAluno = mediaAluno/arrayNotas.length;
        console.log(`${aluno} | ${arrayNotas[0]} | ${arrayNotas[1]} | ${arrayNotas[2]} Média:${mediaAluno.toFixed(2)}`);
        contador++;
    }
}

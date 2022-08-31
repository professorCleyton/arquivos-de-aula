// - Criar uma variável para receber o prompt - ok 
// - Quando eu receber o valor, devo transformar em minúsculo - ok
// - Se contem apenas um caracter
// - Tenho que verificar se o valor é uma letra - ok 
// - Se for um número digitado, peço que ele digite uma letra. - ok 
// - Testar se o valor que eu recebi do meu usuário é uma vogal -ok
// - Se for uma vogal, respondo vogal - ok 
// - Senão, se for uma consoante eu respondo consoante - ok 
// - 
{
    let recebeLetra = prompt('Digite uma letra do alfabeto:');
    recebeLetra = recebeLetra.toLowerCase();

    if(recebeLetra.length>1){
        alert("Você deve digitar apenas uma letra.");
    }else if(!isNaN(recebeLetra)){  
        alert("Você não deve digitar um número!");
    }else if(recebeLetra=='a' || recebeLetra=='e' || recebeLetra=='i' 
    || recebeLetra =='o' || recebeLetra=='u' ){
        alert('A letra digitada é uma vogal');
    }else {
        alert ('A letra digitada é uma consoante');
    }
}

{
    let recebeLetra = prompt('Digite uma letra do alfabeto:');
    let letraValida; 
    recebeLetra = recebeLetra.toLowerCase();
    letraValida = isNaN(recebeLetra) ? true : false;
    // recebeLetra = A;
    // A é um número? Não! FALSE

    if (letraValida && recebeLetra.length==1){ // VALIDANDO SE É UMA LETRA E TEM TAMANHO 1
        if(recebeLetra=='a' || recebeLetra=='e' || recebeLetra=='i' 
        || recebeLetra =='o' || recebeLetra=='u'){
            alert('A letra digitada é uma vogal');
        }else{
            alert ('A letra digitada é uma consoante');
        }
    }else{
        alert("Você deve digitar apenas uma letra.");
    }

}
{
let recebeFruta = prompt("digite uma fruta:");
let mensagem = '';
switch (recebeFruta) {
    case "Laranjas" :
        mensagem = "As laranjas custam $0.59 o quilo.";
      break;
    case "Maçãs":
    case "Maçã":
        mensagem = "Maçãs custam $0.32 o quilo.";
      break;
    case "Bananas":
        mensagem ="Bananas custam $0.48 o quilo.";
      break;
    case "Cerejas":
        mensagem ="Cerejas custam $3.00 o quilo.";
      break;
    case "Mangas":
    case "Mamões":
        mensagem ="Mangas e mamões custam $2.79 o quilo.";
      break;
    default:
        mensagem ="Desculpe, estamos sem nenhuma " + recebeFruta + ".";
  }
  console.log(mensagem);
  alert(mensagem);
  console.log("Tem algo mais que você gostaria de levar?");
}

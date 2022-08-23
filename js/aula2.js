// TIPOS DE DADOS
// let tipoString = 'Uma string';
// let tipoNumber = 10;
// let tipoBoolean = true;
// let tipoNull = null;
// let tipoUdenfined;

let primeiroNumero = 0;
let segundoNumero = 0;
let recebeResultado = 0;
let formula = 10 + 10 - 5 * (10-5); // VARIAVEL RECEBENDO UMA FORMULA COMPLEXA

{ // Calculadora versão 1 
    const mensagemSoma = "A soma dos números é: ";
    const mensagemSubtracao = "A subtração dos números é: ";
    const mensagemMultiplicacao = "A multiplicação dos números é: ";
    const mensagemDivisao = "A divisão dos números é: ";
    const mensagemResto = "O resto da divisão é: ";

    primeiroNumero = prompt('Digite o primeiro número');
    segundoNumero  = prompt('Digite o segundo numero');
    // soma simples
    recebeResultado = parseInt(primeiroNumero) + parseInt(segundoNumero); 
    alert(mensagemSoma + recebeResultado);
    console.log(mensagemSoma + recebeResultado);
    // Subtracao simples
    recebeResultado = primeiroNumero - segundoNumero;
    alert(mensagemSubtracao + recebeResultado);
    console.log(mensagemSubtracao + recebeResultado);
    // Multiplicacao simples
    recebeResultado = primeiroNumero * segundoNumero;
    alert(mensagemMultiplicacao + recebeResultado);
    console.log(mensagemMultiplicacao + recebeResultado);
     // Divisao simples
     recebeResultado = primeiroNumero / segundoNumero;
     alert(mensagemDivisao + recebeResultado);
     console.log(mensagemDivisao + recebeResultado);
    // Resto divisão
    recebeResultado = primeiroNumero % segundoNumero;
    alert(mensagemResto + recebeResultado);
    console.log(mensagemResto + recebeResultado);
}


// INCREMENTO E DECREMENTO
let numeroDecremento = 10;
let numeroIncremento = 10; 
numeroIncremento = numeroIncremento++;
numeroDecremento = numeroDecremento--;

//Incremento
console.log(numeroIncremento++);
console.log(numeroIncremento++);
console.log(numeroIncremento++);
console.log(numeroIncremento++);
console.log(numeroIncremento++);
console.log(numeroIncremento++);
//Decremento
console.log(numeroDecremento--);
console.log(numeroDecremento--);
console.log(numeroDecremento--);
console.log(numeroDecremento--);
console.log(numeroDecremento--);
console.log(numeroDecremento--);
{
  // Calculadora versão 1.2
  const mensagemCliente = "A operação dos números é: ";

  let recebeOperacao = prompt("Qual operação deseja realizar?");
  let primeiroNumero = Number(prompt("Digite o primeiro número"));
  let segundoNumero = Number(prompt("Digite o segundo número"));

  switch (recebeOperacao) {
    case "soma":
    case "+":
        recebeResultado = `${mensagemCliente.replace("operação", "soma")} 
        ${primeiroNumero + segundoNumero}`;
      break;
    case "subtração":
      break;
    case "multiplicação":
      break;
    case "divisão":
        break;
    default:
        recebeResultado = `A operação informada é inválida! 
            Utilize (soma,subtração, multiplicação ou divisão`;
      break;
  }
  alert(recebeResultado);
  console.log(recebeResultado);

  // // Subtracao simples
  // recebeResultado = mensagemCliente.replace('operação','subtração') + primeiroNumero - segundoNumero;
  // alert(recebeResultado);
  // console.log(recebeResultado);
  // // Multiplicacao simples
  // recebeResultado = primeiroNumero * segundoNumero;
  // alert(mensagemCliente.replace('operação','multiplicação') + recebeResultado);
  // console.log(mensagemCliente.replace('operação','multiplicação') + recebeResultado);
  //  // Divisao simples
  //  recebeResultado = primeiroNumero / segundoNumero;
  //  alert(mensagemCliente.replace('operação','divisão') + recebeResultado);
  //  console.log(mensagemCliente.replace('operação','divisão') + recebeResultado);
  // // Resto divisão
  // recebeResultado = primeiroNumero % segundoNumero;
  // alert(mensagemCliente.replace('A operação','O resto') + recebeResultado);
  // console.log(mensagemCliente.replace('A operação','O resto') + recebeResultado);
}

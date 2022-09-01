  // Calculadora versão 1.3
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
        recebeResultado = `${mensagemCliente.replace("operação", "subtração")} 
        ${primeiroNumero - segundoNumero}`;
      break;
    case "multiplicação":
        recebeResultado = `${mensagemCliente.replace("operação", "multiplicação")} 
        ${primeiroNumero * segundoNumero}`;
      break;
    case "divisão":
        recebeResultado = `${mensagemCliente.replace("operação", "divisão")} 
        ${primeiroNumero / segundoNumero}`;
        break;
    default:
        recebeResultado = `A operação informada é inválida! 
            Utilize (soma,subtração, multiplicação ou divisão`;
      break;
  }
  alert(recebeResultado);
  console.log(recebeResultado);
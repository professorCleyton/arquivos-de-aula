/* 
    OBJETO:Carro
    Portas: 4
    Marca: Chevrolet
    Cor: Cinza
    Pneus:4
    Motor:
        Quantidade: 1
        Tipo: Combustão
    Lugares:5
    
*/

let carro = {
  portas: 4,
  marca: "Chevrolet",
  cor: "Cinza",
  pneus: 4,
  motor: {
    quantidade: 1,
    tipo: "Combustão",
    combustivel: ["Gasolina", "Etanol"],
  },
  lugares: 5,
};
// Exibindo
console.log("Valor Exibido", carro.motor.combustivel[1]);

// Adicionando valor no objeto criado
carro.direcao = 'Hidráulica';
//Modificando valor de uma propriedade no objeto
carro.portas = 2;
console.log("Valor Adicionado", carro);

/*
    OBJETO:Email
    Assunto
    Mensagem
    Destinatário
    Anexo
    Remetente
*/

let contatos = {
    contato:{
        'ALMACH102':{
          nome:'Kayk',
          email:'kayk@gmail.com',  
        },
        'ESMACH110':{
            nome:'Geovana',
            email:'geovana@gmail.com'
        }
    }
};

let email = {};
email.contato = contatos.contato['ESMACH110'];

// PROPRIEDADES DO OBJETO
contatos.remetente = "cleytonwide@gmail.com";


console.log("Email", email);

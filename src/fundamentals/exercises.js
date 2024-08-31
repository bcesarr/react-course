// ----- Exemplo de Uso de Ternário ----- \\

// Só utilizamos o Ternário para até 1 condição, se usarmos um ternário dentro de outro isso é uma pratica ruim

// function validarIdade(idade) {
//     return (idade >= 18 ? console.log("Pode comprar") : console.log("Não pode"))
// }

//  validarIdade (18)



// ----- Outro Exemplo Utilizando uma Variavel para Colocar uma Mensagem Dentro ----- \\

// const age = 20

// const message = age >= 18 ? "Você é maior de idade" : "Você é menor de idade"

// console.log(message)



// ----- Exercicio 1 ----- \\

// - Escreva um código que verifique se um número é par ou ímpar usando o operador ternário. - \\

// function imparouPar(numero) {
//     return (numero % 2 === 0 ? console.log("Este número é par") : console.log("Este número é impar"))
// }

// imparouPar(7)



// ----- Exercicio 2 ----- \\

// - Dada a variavel 'clienteFidelidade', use um operador ternário para definir o valor do desconto (10% para clientes fiéis, 5% para novos clientes). - \\

// function validaFidelidade(clienteFidelidade) {
//     return (
//         clienteFidelidade ? console.log("Adicione um desconto de 10% ao cliente fidelidade") : console.log("Adicione um desconto de 5%")
//     )
// }

// validaFidelidade(true)



// ----- Exemplo de Uso de If e Else ----- \\

// Só utilizamos o if a partir de 2 condionais

// function validarIdadeIf (idade) {
//     if (idade >=18) {
//         return console.log("É maior de idade")
//     } else {
//         return console.log("É menor de idade")
//     }
// }

// validarIdadeIf(20)



// Outro exemplo utilizando Else If

// function validarNota(nota) {
//     if (nota >= 7) {
//         return console.log("Aprovado")
//     } else if (nota >= 5 && nota <= 6) {
//         return console.log("Está de recuperação")
//     } else {
//         console.log("Reprovado")
//     }
// }

// validarNota(5.5)



// ----- Exercicio 1 ----- \\

// - Crie uma função que receba uma nota como parâmetro e retorne "Aprovado" se a nota for maior ou igual a 60, e "Reprovado" caso contrário. - \\

// function avaliacaoNota(nota) {
//     if (nota >= 60) {
//         return console.log("Aprovado!")
//     } else {
//         return console.log("Reprovado")
//     }
// }

// avaliacaoNota(100)


// ----- Exercicio 2 ----- \\

// - Crie uma função que receba um número e retorne "Positivo", "Negativo" ou "Zero". - \\

// Uma forma de se fazer:

// function validacaoNumero(numero) {
//     if (Math.sign(numero) == 1) {
//         return console.log("Este número é positivo")
//     } else if (Math.sign(numero) == -1) {
//     return console.log("Este número é negativo")
//     } else {
//     return console.log("Este número é 0")
//     } 
// }

// validacaoNumero(2.5)


// Outra forma de se fazer:

// function verificaValor(valor) {
//     if (valor > 0) {
//         return console.log("Positivo")
//     } else if (valor < 0) {
//         return console.log("Negativo")
//     } else {
//         return console.log("Zero")
//     }
// }

// verificaValor(0)



// ----- Exemplo de Uso Switch ----- \\


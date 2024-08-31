// ----- Exemplo de Uso de Ternário ----- \\

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

function validaFidelidade(clienteFidelidade) {
    return (
        clienteFidelidade ? console.log("Adicione um desconto de 10% ao cliente fidelidade") : console.log("Adicione um desconto de 5%")
    )
}

validaFidelidade(true)
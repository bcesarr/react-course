// console.log("Estou funcionando!")

function SomaNumeros(n1,n2){
    return n1+n2
}

// console.log(SomaNumeros(1, 4))

const person = {
    name: "Lyan",
    age: 18,
    gender: "Male"
}

// Forma estruturada
// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)


// Forma desestruturada
const {name, age, gender} = person

console.log(name)
console.log(age)
console.log(gender)
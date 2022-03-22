// declaraçãod e variavéis
var nome = 'Wisley Alves'
let idade = 28
const sexo = 'M'

// imprimir no console
console.log(nome)

// comandos de condição
const comparaIdade = function (idade){
    let idadeMax = 30
    let op = 3
    console.log('> ', sexo)

    if (idade <= idadeMax ){
        console.log('Idade é menor ', idadeMax )
        console.log(`Idade é menor que ${idadeMax}`)
    } else {
        console.log('Idade é maior ' + idadeMax)
    }
    
    switch(op){
        case 1:
            console.log('Caso 1')
        break
        case 2:
            console.log('Caso 2')
        break

        default:
            console.log('Default')
    }

}
// comando de repetição
const repeticao = function () {
    for(let i = 0; i < 10; i++){
        console.log('> ', i)
    }
}

// ARRAY
const arrays = function () {
    let idade = [12,30,50,45,28,24,70,80,15]
    console.log(idade.length)

    for(let i = 0; i < idade.length; i++){
        console.log('> ', idade[i])
    }
    
}

// objeto
const pessoas = function(){
    let arrayPessoas = []

    let nome = 'Wisley Alves'
    let idade = 28
    let sexo = 'M'

    let pessoa = {
        nome,
        idade,
        sexo
    }

    arrayPessoas.push(pessoa)

    nome = 'Claúdia Aguilar'
    sexo = 'F'
    
    pessoa = {
        nome,
        idade,
        sexo
    }

    arrayPessoas.push(pessoa)

    console.log(arrayPessoas)
}

const inicio = function () {
    pessoas()
}

inicio()
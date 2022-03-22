const cadastro = function () {
    console.log('> Iniciei a função')
    let nome = document.querySelector('#box-nome').value
    let idade = document.querySelector('#box-idade').value
    let sexo =document.querySelector('#box-sexo').value
    console.log(nome, ' - ', idade, ' - ', sexo)
}
/*
Case Sensitive

por Tag: getElementBytagName()
por Id: get ElementById()
por Nome: getElementsbyName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email') /*poderia declarar como 'input#email' ou p/ classe '.email'*/
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk =  false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length<3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    } 
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1||email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk =  false
    }
    else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk =  true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite até 100 caracteres'
        txtAssunto.style.color = 'red'
        //txtAssunto.style.display = 'block'
        assuntoOk = false
    }
    else{
        //txtAssunto.style.display = 'none'
        txtAssunto.innerHTML = ''
        assuntoOk = true
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso')
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar')
    }

}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
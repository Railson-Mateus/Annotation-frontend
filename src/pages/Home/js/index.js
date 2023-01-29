const data = new Date()
const dia = String(data.getDate()).padStart(2, '0')
const mes = String(data.getMonth() + 1).padStart(2, '0')
const ano = data.getFullYear()
const dataAtual = `${dia}/${mes}/${ano}`
const hoje = document.querySelector('.data')
const usuario = document.querySelector('.nome')

let nomeUsuario = "Italo Souza Sampaio" //vai receber da tela de login 


function infoUser(hoje ,usuario ,nomeUsuario ){
    hoje.textContent = dataAtual 
    usuario.textContent = nomeUsuario
}


function perfil(fotoUser){
    imagem.src = fotoUser // receber a foto do usuario 
}

infoUser(hoje,usuario,nomeUsuario)

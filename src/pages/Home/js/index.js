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

infoUser(hoje,usuario,nomeUsuario)

const input = document.querySelector('.dataCard')

input.addEventListener('keypress', () => {
  let inputLength = input.value.length
console.log(inputLength);
  // MAX LENGHT DATA
  if (inputLength == 2 || inputLength == 5) {
    input.value += '/'
  } 
})

const salvar = document.querySelector('.salvar')
const checkbox = document.querySelector('.checkbox')
salvar.addEventListener('click',()=>{
    if(checkbox.checked){
      let post = document.querySelector('.post')
      let card = document.querySelector('.card')
      card.appendChild(post)
    }
})
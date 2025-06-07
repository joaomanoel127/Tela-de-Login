let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')


email.addEventListener('keyup', () => {
  if(email.value.length <= 4){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'Email *Insira no minimo 5 caracteres'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

async function cadastrar() {
  if (validEmail && validSenha && validConfirmSenha) {
    try {
      const res = await fetch("http://localhost:3000/auth/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.value,
          senha: senha.value
        })
      });

      const data = await res.json();

      if (res.ok) {
        msgSuccess.innerHTML = "<strong>Cadastro realizado!</strong>";
        msgSuccess.style.display = "block";
        msgError.style.display = "none";

        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);
      } else {
        msgError.innerHTML = `<strong>${data.erro}</strong>`;
        msgError.style.display = "block";
        msgSuccess.style.display = "none";
      }
    } catch (err) {
      msgError.innerHTML = "<strong>Erro de conexão com o servidor</strong>";
      msgError.style.display = "block";
      msgSuccess.style.display = "none";
    }
  } else {
    msgError.innerHTML = "<strong>Preencha todos os campos corretamente</strong>";
    msgError.style.display = "block";
    msgSuccess.style.display = "none";
  }
}


  
  

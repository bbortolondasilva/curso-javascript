var a = window.document.getElementById("area")

function clicar() {
    a.innerText = "Clicou!"
    a.style.backgroundColor = "red"
}

function entrar() {
    a.innerText = "Entrou!"
}

function sair() {
    a.innerText = "Saiu!"
    a.style.backgroundColor = "green"
}

a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)

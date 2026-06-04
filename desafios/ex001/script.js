var hora_atual = document.getElementById("hora-atual")
var imagem_hora = document.getElementById("img-hora")
var hora = new Date().getHours()

hora_atual.innerHTML = `<h2>Agora são ${hora} horas.</h2>`

function define_imagem() {
    if (hora >= 0 && hora <= 12) {
        imagem_hora.style.backgroundImage = `url("assets/imagem-bom-dia.jfif")`;
    } else if (hora <= 18) {
        imagem_hora.style.backgroundImage = `url("assets/imagem-boa-tarde.jpg")`;
    } else {
        imagem_hora.style.backgroundImage = `url("assets/imagem-boa-noite.jpg")`;
    }
}

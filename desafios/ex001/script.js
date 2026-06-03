var hora_atual = Number(new Date().getHours())
var imagem_hora = document.getElementById("img-hora")

function define_imagem() {
    if (hora_atual >= 0 && hora_atual <= 12) {
        imagem_hora.style.backgroundImage = "assets/imagem-bom-dia.jfif"
    } else if (hora_atual < 18) {
        imagem_hora.style.backgroundImage = "assets/imagem-boa-tarde.jpg"
    } else {
        imagem_hora.style.backgroundImage = "assets/imagem-boa-noite.jpg"
    }
}

define_imagem()

var hora_atual = document.getElementById("hora-atual")
var imagem_hora = document.getElementById("img-hora")
var hora = new Date().getHours()

hora_atual.innerHTML = `<h2>Agora são ${hora} horas.</h2>`

function define_imagem() {
    if (hora >= 0 && hora <= 12) {
        imagem_hora.style.backgroundImage = `url("assets/imagem-bom-dia.jfif")`;

        document.body.style.background = "#fff78b"
    } else if (hora <= 18) {
        imagem_hora.style.backgroundImage = `url("assets/imagem-boa-tarde.jpg")`;

        document.body.style.background = "#d16d33"
    } else {
        imagem_hora.style.backgroundImage = `url("assets/imagem-boa-noite.jpg")`;

        document.body.style.background = "#001046"
    }
}

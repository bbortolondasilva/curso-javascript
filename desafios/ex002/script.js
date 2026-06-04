function verificar() {
    var ano =  new Date().getFullYear()
    var fAno = document.getElementById("iano")
    var res = document.querySelector("div#res")

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fSex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement("div")
        img.setAttribute("id", "foto")

        if (fSex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade < 10) {
                //criança
                img.style.backgroundImage = `url("imagens/bebe-homem.jpg")`;
            } else if (idade < 21) {
                // joven
                img.style.backgroundImage = `url("imagens/jovem-homem.jpg")`;
            } else if (idade < 50) {
                // adulto
                img.style.backgroundImage = `url("imagens/homem.jpg")`;
            } else {
                // idoso
                img.style.backgroundImage = `url("imagens/idoso.jpg")`;
            }
        } else {
            genero = "Mulher"

            if (idade >= 0 && idade < 10) {
                //criança
                img.style.backgroundImage = `url("imagens/bebe-mulher.jpg")`;
            } else if (idade < 21) {
                // joven
                img.style.backgroundImage = `url("imagens/jovem-mulher.jpg")`;
            } else if (idade < 50) {
                // adulto
                img.style.backgroundImage = `url("imagens/mulher.jpg")`;
            } else {
                // idoso
                img.style.backgroundImage = `url("imagens/idosa.jpg")`;
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
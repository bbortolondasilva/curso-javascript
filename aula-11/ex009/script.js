function calcular() {
    var nac = document.querySelector("input#ivelocidade").value
    var res = document.querySelector("div#res")

    if (nac == "Brasileiro") {
        res.innerHTML = `<p>Sua nacionalidade é: <strong>${nac}</strong></p>`

        res.innerHTML += `Idioma configurado: Português-Brasil</p>`
    } else {
        res.innerHTML = `<p>Your nationality is: <strong>${nac}</strong></p>`

        res.innerHTML += `Language set: English`
    }
}

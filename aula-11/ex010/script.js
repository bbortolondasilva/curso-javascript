function calcular() {
    var txtv = Number(document.querySelector("input#ivelocidade").value)
    var res = document.querySelector("div#res")

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${txtv}</strong></p>`

    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}

function calcular() {
    var txtv = Number(document.querySelector("input#ivelocidade").value)
    var res = document.querySelector("div#res")

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${txtv} Km/h</strong></p>`

    if (txtv > 60) {
        res.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade!</p>`
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}

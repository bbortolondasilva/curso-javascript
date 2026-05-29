var n1 = Number(document.getElementById("inumero1").value)
var n2 = Number(document.getElementById("inumero2").value)

function somar() {
    var valor_soma = n1 + n2

    var resultado = document.getElementById("resultado")
    resultado.innerHTML = `<p>Resultado: ${valor_soma}</p>`
}

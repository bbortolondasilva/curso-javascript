function getDados() {
    var inicio = Number(document.getElementById("iini").value)
    var fim = Number(document.querySelector("input#ifim").value)
    var passo = Number(document.querySelector("input#ipas").value)

    console.log(inicio)
    console.log(fim)
    console.log(passo)
}

document.getElementById("btn").addEventListener("click", getDados, mostraConsole)

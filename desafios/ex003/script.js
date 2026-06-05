function getDados() {
    var inicio = document.getElementById("iini").value
    var fim = document.querySelector("input#ifim").value
    var passo = document.querySelector("input#ipas").value

    return
}

function mostraConsole() {
    console.log(inicio)
    console.log(fim)
    console.log(passo)
}

document.getElementById("btn").addEventListener("click", getDados, mostraConsole)

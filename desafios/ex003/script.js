function getDados() {
    return {
        inicio: Number(document.getElementById("iini").value),
        fim: Number(document.querySelector("input#ifim").value),
        passo: Number(document.querySelector("input#ipas").value),
    }
}

function contar(dados) {
    var res = document.getElementById("res")

    for (dados.inicio; dados.inicio <= dados.fim; dados.passo) {
        res += `${dados.inicio} 👉 `
    }
}

function mostraDados(dados) {

}

document.getElementById("btn").addEventListener("click", getDados)
document.getElementById("btn").addEventListener("click", contar(getDados()))

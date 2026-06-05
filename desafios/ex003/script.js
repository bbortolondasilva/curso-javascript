function getDados() {
    return {
        inicio: Number(document.getElementById("iini").value),
        fim: Number(document.querySelector("input#ifim").value),
        passo: Number(document.querySelector("input#ipas").value),
    }
}

function contar(inicio, fim, passo) {
    var res = document.getElementById("res")

    for (inicio; inicio <= fim; passo) {
        res += `${inicio} 👉 `
    }
}

function mostraDados(dados) {

}

document.getElementById("btn").addEventListener("click", getDados)

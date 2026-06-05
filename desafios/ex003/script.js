function contar() {
    return {
        inicio: Number(document.getElementById("iini").value),
        fim: Number(document.querySelector("input#ifim").value),
        passo: Number(document.querySelector("input#ipas").value),
    }
}

document.getElementById("btn").addEventListener("click", contar)

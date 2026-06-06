function contar() {
    var inicio = document.getElementById("iini")
    var fim = document.querySelector("input#ifim")
    var passo = document.querySelector("input#ipas")
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO! FALTAM DADOS!")
    }
}

document.getElementById("btn").addEventListener("click", contar)

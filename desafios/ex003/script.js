function contar() {
    var inicio = document.getElementById("iini")
    var fim = document.querySelector("input#ifim")
    var passo = document.querySelector("input#ipas")
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
        // window.alert("ERRO! FALTAM DADOS!")
    } 

    else {
        res.innerHTML = "<p>Contando: </p> <br>"

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {
            for (i; i <= f; i += p) {
                res.innerText += `${i} ➡ `
            }
        }
        
        else {
            for (i; i >= f; i -= p) {
                res.innerText += `${i} ➡ `
            }
        }
        res.innerText += `🏁`
    }
}

document.getElementById("btn").addEventListener("click", contar)

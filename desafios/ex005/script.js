let num = document.querySelector("input#inum")
let tab = document.querySelector("select#itab")
let res = document.querySelector("div#res")
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// O "!" antes da chamada da função significa "Não-inLista", é uma negação, ou seja, espera o retorno "false".
function adicionar() {
    if (isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        // console.log(valores)
    } else {
        window.alert("Valor inválido ou já encontrado na lista!")
    }
}

document.getElementById("btn-add").addEventListener("click", adicionar)
// document.getElementById("btn-fin").addEventListener("click", )

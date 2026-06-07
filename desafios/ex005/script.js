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

        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`

        tab.appendChild(item)
    } else {
        window.alert("Valor inválido ou já encontrado na lista!")
    }

    res.innerHTML = ""
    num.value = ""
    num.focus() // foca automaticamente no elemento selecionado.
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > max) {
                max = valores[pos]
            } 

            if (valores[pos] < min) {
                min = valores[pos]
            }
        }

        media = soma / (valores.length)

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${max}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${min}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}

document.getElementById("btn-add").addEventListener("click", adicionar)
document.getElementById("btn-fin").addEventListener("click", finalizar)

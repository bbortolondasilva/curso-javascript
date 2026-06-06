function tabuada() {
    var num = document.getElementById("inum")
    var tab = document.getElementById("itab")

    if (num.value.length == 0) {
        window.alert("ERRO! Digite um valor válido!")
    }

    else {
        var n = Number(num.value)
        tab.innerHTML = ""

        for (var c = 1; c <= 10; c++) {
            var item = document.createElement("option")
            item.innerText = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }   
}

document.getElementById("btn").addEventListener("click", tabuada)

let num = [3, 5, 6, 0, 1, 2, 7]

num.sort()

// mostrando o vetor formatado método 1:
for (var c = 0; c < num.length; c++) {
    console.log(`- Posição ${c}: ${num[c]}`)
}

console.log("\n")

// mostrando o vetor formatado método 2:
for (let key in num) {
    console.log(`- Posição ${key}: ${num[key]}`)
}

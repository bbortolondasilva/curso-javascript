let num = [5, 8, 2]
// .push(): Funciona exatamente como o .append do python.
num.push(4)



console.log(`Nosso vetor é o ${num}`)

// .length: é o mesmo que o lens do python. Porém não se usa parênteses, pois ele é um atributo, apenas colocamos o nome_variável.length
console.log(`O vetor tem ${num.length} posições`)

// Selecionando apenas um indice do vetor: "[indice]"
console.log(`O primeiro elemento do vetor é ${num[0]}`)

// Mostrando o vetor organizado: 
// .sort(): mesma função que no python, organiza os elementos em ordem crescente
num.sort()

console.log(`O vetor em ordem crescente fica ${num}\n`)

// mostrando o vetor formatado:

for (var c = 0; c < num.length; c++) {
    console.log(`- Posição ${c+1}: ${num[c]}`)
}

let pos = num.indexOf(8) // Retorna o índice do valor passado nos parênteses. Caso ele não esteja no vetor, retorna -1 como índice.

console.log(pos)

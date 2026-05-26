var nome = window.prompt("Qual é o seu nome?")

// Document.write: Sobrescreve a página com o conteúdo inserido nele.
document.write(`<h2>Seu nome tem ${nome.length} letras!</h2>`)
// nome.length: Mesma coisa do len do python, captura a quantidade de caracteres ou índices.

// toUpperCase(): Mesmo que o .upper(), transforma o texto em maíuculo.
document.write(`<h2>Seu nome em maiúsculo ${nome.toUpperCase()}</h2>`)

// toLowerCase(): Mesmo que o .upper(), transforma o texto em minúsculo.
document.write(`<h2>Seu nome em minúsculo ${nome.toLowerCase()}</h2>`)

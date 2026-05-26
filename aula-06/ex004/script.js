var nome = window.prompt("Qual é o seu nome?")

// Document.write: Sobrescreve a página com o conteúdo inserido nele.
document.write(`<h2>Seu nome tem ${nome.length} letras!</h2>`)
// nome.length: Mesma coisa do len do python, captura a quantidade de caracteres ou índices.

document.write(`<h2>Seu nome em maiúsculo ${nome.toUpperCase()}</h2>`)

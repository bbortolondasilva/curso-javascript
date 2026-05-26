// Aqui está sendo declarada uma variável (var) do tipo Number() -> Converte para número. (serve tanto para o int, quanto para o float). 
var n1 = Number(window.prompt("Digite um número: ")) 

// Caso queira um tipo em específico, usamos o Number.parseInt() ou parseFloat() para que ele transforme em int ou float.

// // Aqui está sendo declarada uma variável (var) do tipo Number (serve tanto para o int, quanto para o float)
var n2 = Number(window.prompt("Digite outro número: "))

var soma = n1 + n2

// Para converter para String usamos o String() -> String(var) ou o .toString() -> var.toString().

window.alert("A soma dos valores é: " + soma)

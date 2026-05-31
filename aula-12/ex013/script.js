var dia = new Date().getDay()

/* 
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sábado
*/

// O switch é uma estrutura condicional que testa um aexpressão passada nos parenteses com valores fixos. Por exemplo, é muito útil para formulários select, que possuem opções fixas declaradas, então ao invés de fazer vários if/else if para cada opção, usamos um switch com um case para cada opção.

switch (dia) {
    case 0: 
        console.log("Segunda")
        // Break é obrigatório dentro de cada case para parar a execução quando chegar ao final do bloco de código do case.
        break

    case 1: 
        console.log("Terça")
        // Break é obrigatório dentro de cada case para parar a execução quando chegar ao final do bloco de código do case.
        break

    case 2: 
        console.log("Quarta")
        // Break é obrigatório dentro de cada case para parar a execução quando chegar ao final do bloco de código do case.
        break

    case 3: 
        console.log("Quinta")
        // Break é obrigatório dentro de cada case para parar a execução quando chegar ao final do bloco de código do case.
        break

    case 4: 
        console.log("Sexta")
        // Break é obrigatório dentro de cada case para parar a execução quando chegar ao final do bloco de código do case.
        break

    case 5: 
        console.log("Sábado")
        // Break é obrigatório dentro de cada case para parar a execução quando chegar ao final do bloco de código do case.
        break

    case 6: 
        console.log("Domingo")
        // Break é obrigatório dentro de cada case para parar a execução quando chegar ao final do bloco de código do case.
        break
}

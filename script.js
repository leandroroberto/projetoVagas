let menu = ""
let listaVagas = []

do {
    menu = parseInt(prompt("1. Listar vagas disponíveis\n2. Criar uma nova vaga\n3. Visualizar uma vaga\n4. Inscrever um candidato a uma nova vaga\n5. Excluir uma vaga\n6. Sair"))
    switch (menu) {
        case 1:
            listarVagas()
            break
        case 2:
            criarVagas()
            break
        case 3:
            visualizarVagas()
            break
        case 4:
            inscreverCandidato()
            break
        case 5:
            excluirVaga()
            break
        case 6:
            break
        default:
            alert("Escolha uma opção do menu")
            break
    }
} while (menu != 6)

function listarVagas() {
    nomeVagas = []
    for (let i = 0; i < listaVagas.length; i++) {
        nomeVagas.push("Índice: " + ((listaVagas.indexOf(listaVagas[i])) + " - Nome da vaga: " + (listaVagas[i].nome)) + " - Candidatos: " + (listaVagas[i].candidato)) + "\n"
    }
    if (nomeVagas == "") {
        alert("Lista vazia...")
    } else {
        alert(nomeVagas)
    }
}

function criarVagas() {
    let vaga = {}
    let nome = prompt("Digite o nome da vaga:")
    let descricao = prompt("Descreva a vaga:")
    let dataLimite = prompt("Digite uma data limite:")
    let adicionarVaga = confirm(`Deseja adicionar a vaga abaixo?\nVaga: ${nome}\nDescrição: ${descricao}\nData limite: ${dataLimite}`)

    if (adicionarVaga) {
        vaga.nome = nome
        vaga.descricao = descricao
        vaga.dataLimite = dataLimite
        vaga.candidato = 0
    }

    listaVagas.push(vaga)
}

function visualizarVagas() {
    let indiceVaga = parseInt(prompt("Digite o índice da vaga que deseja visualizar: "))
    alert(`Índice da vaga: ${listaVagas.indexOf(listaVagas[indiceVaga])}\nNome da vaga: ${listaVagas[indiceVaga].nome}\nDescrição: ${listaVagas[indiceVaga].descricao}\nData limite: ${listaVagas[indiceVaga].dataLimite}\nNúmero de candidatos: ${listaVagas[indiceVaga].candidato}`)
}

function inscreverCandidato() {
    let nomeCandidato = prompt("Digite o nome do candidato:")
    let indiceVaga = parseInt(prompt("Digite o índice da vaga:"))
    let confirmarVaga = confirm(`Deseja inscrever o candidato ${nomeCandidato} na vaga de índice ${indiceVaga} ?`)
    if (confirmarVaga) {
        listaVagas[indiceVaga].candidato += 1
    }
}

function excluirVaga() {
    let excluir = parseInt(prompt("Qual o índice da vaga que deseja excluir?"))
    let indice = listaVagas.indexOf(listaVagas[excluir])
    if (indice > -1) {
        listaVagas.splice(indice, 1)
    }
}


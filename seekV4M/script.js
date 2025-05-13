function adicionarTarefa(event){
    event.preventDefault()

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value 

    if(tarefa == ""){
        document.getElementById("mensagem").textContent = "Por favor, adicione uma tarefa"
        return
    }

    let mensagem = "tarefa " + tarefa + " adicionada"
    document.getElementById("mensagem").textContent = mensagem

    let listaTarefas = document.getElementById("listaTarefas") //Referência o ul
    let novaTarefa = document.createElement("li") // Cria um "li" vazio, genérico
     
    // Cria um span para mostrar o texto da tarefa separado do botão "Remover"
    let textoTarefa = document.createElement("span")
    textoTarefa.textContent = tarefa // Agora, tarefa está em uma área separada

    //criando botao de remover

    let botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover"
    botaoRemover.className = "botao-remover"
    botaoRemover.onclick = function(){
        removerTarefa(this)
    }

    novaTarefa.appendChild(textoTarefa) //adiciona tarefa ao li
    novaTarefa.appendChild(botaoRemover) //adiciona ao li

    listaTarefas.appendChild(novaTarefa) // adiciona li ao ul

}

function removerTarefa(botao) {
    let tarefa = botao.parentElement
    tarefa.remove()
    document.getElementById("mensagem").textContent = "Tarefa removida com sucesso"

}
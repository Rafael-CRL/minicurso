// Função para adicionar nova tarefa
function adicionarTarefa() {
    //utilizado para obter elemento de input do html
    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value;
    
    //Pega o ID de referência, e adiciona o contexto de texto
    if(tarefa == ""){
        document.getElementById("mensagem").textContent = "Por favor, adicione uma tarefa";
        return;
    }
    
    let mensagem = "Tarefa '" + tarefa + "' adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;

    let listaTarefas = document.getElementById("listaTarefas"); //Pega/referência o ul do html
    let novaTarefa = document.createElement("li"); //Cria um li genérico, onde será armazenado

    // Criar o conteúdo da tarefa
    let textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefa;
    
    // Criar o botão de remover
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.className = "botao-remover";
    botaoRemover.onclick = function() {
        removerTarefa(this);
    };
    
    // Adicionar o texto e o botão ao item da lista
    novaTarefa.appendChild(textoTarefa); //colocando textoTarefa(que tem a tarefa) em li
    novaTarefa.appendChild(botaoRemover); // colocando o botao remover em li

    listaTarefas.appendChild(novaTarefa); // adiciona o li a lista ul

    inputTarefa.value = ""; // Limpa o campo de entrada
}

// Função para remover uma tarefa
function removerTarefa(botao) {
    let tarefa = botao.parentElement;
    tarefa.remove();
    document.getElementById("mensagem").textContent = "Tarefa removida com sucesso!";
}

// Configurar o evento de envio do formulário
document.getElementById("formTarefa").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    adicionarTarefa();
});
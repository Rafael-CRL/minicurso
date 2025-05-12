document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() === '') return; // Não adiciona tarefas vazias

    // Cria novo item de lista
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskInput.value}
        <button class="deleteBtn">X</button>
    `;

    // Adiciona evento de clique para remover tarefa
    li.querySelector('.deleteBtn').addEventListener('click', function() {
        li.remove();
    });

    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Limpa o input
});
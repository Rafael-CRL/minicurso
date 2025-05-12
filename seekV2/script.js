const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const statusMessage = document.querySelector('#statusMessage');
const charCounter = document.querySelector('#charCounter');

// Evento de input para contador de caracteres (BÁSICO)
taskInput.addEventListener('input', function() {
    const currentLength = taskInput.value.length;
    charCounter.textContent = `${currentLength}/50`; // Alteração de conteúdo
});

// Evento de submit do formulário (BÁSICO)
taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    // Estrutura de controle: if (sem else)
    if (taskText === '') {
        statusMessage.textContent = "Digite uma tarefa válida!"; // Alteração de conteúdo
        taskInput.style.borderColor = '#ff4444'; // Manipulação de estilo
        return;
    }

    // Resetar mensagem de erro
    statusMessage.textContent = '';
    taskInput.style.borderColor = '#ddd';

    // Criar elemento <li> e adicionar à lista
    const li = document.createElement('li');
    li.textContent = taskText; // Alteração de conteúdo

    // Botão de remover (querySelectorAll será usado implicitamente depois)
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.className = 'removeBtn';
    
    // Evento de clique para remover (BÁSICO)
    removeBtn.addEventListener('click', function() {
        li.remove(); // Manipulação do DOM
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = ''; // Resetar input
    charCounter.textContent = '0/50'; // Resetar contador
});
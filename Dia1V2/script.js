// 1. SELEÇÃO DE ELEMENTOS DOM
// Botões
const themeToggleBtn = document.getElementById('theme-toggle');
const likeBtn = document.getElementById('like-btn');
const skillsToggleBtn = document.getElementById('skills-toggle');
const contactBtn = document.getElementById('contact-btn');
const closeModalBtn = document.getElementById('close-modal');

// Elementos para manipular
const body = document.body;
const skillsList = document.getElementById('skills-list');
const likesCount = document.getElementById('likes-count');
const viewsCount = document.getElementById('views-count');
const contactModal = document.getElementById('contact-modal');
const contactForm = document.getElementById('contact-form');

// 2. VARIÁVEIS DE ESTADO
let likes = 0;
let views = 0;
let isDarkTheme = false;
let isSkillsVisible = false;

// 3. CONTADOR DE VISUALIZAÇÕES (executa imediatamente)
// Simula contagem de visualizações da página
function incrementViews() {
    views++;
    viewsCount.textContent = views;
}
// Incrementa visualização ao carregar página
incrementViews();

// 4. FUNÇÕES DE MANIPULAÇÃO DO DOM

// Alterna entre tema claro e escuro
function toggleTheme() {
    // Toggle da variável de estado
    isDarkTheme = !isDarkTheme;
    
    // Manipula classes no body
    if (isDarkTheme) {
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️'; // Emoji sol
    } else {
        body.classList.remove('dark-theme');
        themeToggleBtn.textContent = '🌙'; // Emoji lua
    }
}

// Função para mostrar/esconder lista de habilidades
function toggleSkills() {
    // Toggle da variável de estado
    isSkillsVisible = !isSkillsVisible;
    
    // Manipula classes e texto do botão
    if (isSkillsVisible) {
        skillsList.classList.remove('hidden');
        skillsToggleBtn.textContent = '-';
    } else {
        skillsList.classList.add('hidden');
        skillsToggleBtn.textContent = '+';
    }
}

// Incrementa contador de curtidas
function incrementLikes() {
    likes++;
    likesCount.textContent = likes;
    
    // Efeito visual ao curtir (opcional)
    likeBtn.style.transform = 'scale(1.3)';
    setTimeout(() => {
        likeBtn.style.transform = 'scale(1)';
    }, 200);
}

// Mostra o modal de contato
function showModal() {
    contactModal.classList.remove('hidden');
}

// Esconde o modal de contato
function hideModal() {
    contactModal.classList.add('hidden');
}

// Processa o envio do formulário
function handleFormSubmit(event) {
    // Previne o comportamento padrão (recarregar página)
    event.preventDefault();
    
    // Coleta dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validação simples
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Simula envio (em uma aplicação real, enviaria para um servidor)
    alert(`Mensagem enviada com sucesso!\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
    
    // Limpa formulário e fecha modal
    contactForm.reset();
    hideModal();
}

// 5. EVENTOS - Conectando elementos com funções

// Evento de clique para alternar tema
themeToggleBtn.addEventListener('click', toggleTheme);

// Evento de clique para mostrar/esconder habilidades
skillsToggleBtn.addEventListener('click', toggleSkills);

// Evento de clique para incrementar curtidas
likeBtn.addEventListener('click', incrementLikes);

// Evento de clique para abrir modal
contactBtn.addEventListener('click', showModal);

// Evento de clique para fechar modal
closeModalBtn.addEventListener('click', hideModal);

// Evento de clique fora do modal para fechá-lo
contactModal.addEventListener('click', function(event) {
    // Verifica se o clique foi fora do conteúdo do modal
    if (event.target === contactModal) {
        hideModal();
    }
});

// Evento de envio do formulário
contactForm.addEventListener('submit', handleFormSubmit);
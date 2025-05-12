document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const navLinks = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.card');
    const inputNome = document.getElementById('nome');
    const btnAcao = document.getElementById('btn-acao');
    const mensagem = document.getElementById('mensagem');
    const contador = document.getElementById('contador');
    
    // Contador de interações
    let contadorInteracoes = 0;
    
    // Função para atualizar o contador
    function atualizarContador() {
        contadorInteracoes++;
        contador.textContent = `Interações: ${contadorInteracoes}`;
    }
    
    // Filtro de cards
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover classe ativo de todos os links
            navLinks.forEach(item => item.classList.remove('ativo'));
            
            // Adicionar classe ativo ao link clicado
            this.classList.add('ativo');
            
            // Filtrar cards
            const filtro = this.getAttribute('data-filter');
            
            cards.forEach(card => {
                if (filtro === 'todos' || card.getAttribute('data-tipo') === filtro) {
                    card.classList.remove('escondido');
                } else {
                    card.classList.add('escondido');
                }
            });
            
            atualizarContador();
        });
    });
    
    // Interação com cards (destacar ao clicar)
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle da classe destacado
            this.classList.toggle('destacado');
            atualizarContador();
        });
    });
    
    // Botão de ação para personalizar a página
    btnAcao.addEventListener('click', function() {
        const nome = inputNome.value.trim();
        
        if (nome) {
            mensagem.textContent = `Olá, ${nome}! Bem-vindo ao seu workshop de desenvolvimento web.`;
            
            // Personalizar o título da página
            document.querySelector('h1').textContent = `Tech Cards de ${nome}`;
            
            atualizarContador();
        } else {
            mensagem.textContent = 'Por favor, digite seu nome.';
        }
    });
});
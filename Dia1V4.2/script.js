// Esperamos que o documento seja carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM que vamos manipular
    const textoDinamico = document.getElementById('texto-dinamico');
    const btnTexto = document.getElementById('btn-texto');
    const btnCor = document.getElementById('btn-cor');
    const btnTamanho = document.getElementById('btn-tamanho');
    const contadorElement = document.getElementById('contador');
    const inputNome = document.getElementById('nome');
    const btnSaudacao = document.getElementById('btn-saudacao');
    const mensagemSaudacao = document.getElementById('mensagem-saudacao');

    // Variável para contar cliques
    let contadorCliques = 0;

    // Função para atualizar o contador
    function atualizarContador() {
        contadorCliques += 1;
        contadorElement.textContent = contadorCliques;
    }

    // Evento para o botão de mudar texto
    btnTexto.addEventListener('click', function() {
        if (textoDinamico.textContent === 'Clique nos botões abaixo para ver o JavaScript em ação!') {
            textoDinamico.textContent = 'O texto foi alterado pelo JavaScript!';
            textoDinamico.classList.add('texto-destacado');
        } else {
            textoDinamico.textContent = 'Clique nos botões abaixo para ver o JavaScript em ação!';
            textoDinamico.classList.remove('texto-destacado');
        }
        atualizarContador();
    });

    // Evento para o botão de mudar cor
    btnCor.addEventListener('click', function() {
        const card = document.querySelector('.card');
        card.classList.toggle('fundo-colorido');
        atualizarContador();
    });

    // Evento para o botão de aumentar texto
    btnTamanho.addEventListener('click', function() {
        textoDinamico.classList.toggle('texto-grande');
        atualizarContador();
    });

    // Evento para o botão de saudação
    btnSaudacao.addEventListener('click', function() {
        const nome = inputNome.value.trim();
        if (nome) {
            mensagemSaudacao.textContent = `Olá, ${nome}! Bem-vindo ao nosso workshop!`;
        } else {
            mensagemSaudacao.textContent = "Por favor, digite seu nome.";
        }
        atualizarContador();
    });

    // Navegação suave para os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});
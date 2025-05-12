// Esperamos que o documento seja carregado completamente antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando elementos que vamos manipular
    const textoDinamico = document.getElementById('texto-dinamico');
    const btnTexto = document.getElementById('btn-texto');
    const btnCor = document.getElementById('btn-cor');
    const btnTamanho = document.getElementById('btn-tamanho');
    const contadorElement = document.getElementById('contador');
    
    // Variável para contar cliques
    let contadorCliques = 0;
    
    // Função para atualizar o contador
    function atualizarContador() {
        contadorCliques += 1;
        contadorElement.textContent = contadorCliques;
    }
    
    // Evento de clique para o botão de mudar texto
    btnTexto.addEventListener('click', function() {
        // Alternar entre dois textos diferentes
        if (textoDinamico.textContent === 'Clique nos botões abaixo para ver o JavaScript em ação!') {
            textoDinamico.textContent = 'O texto foi alterado pelo JavaScript!';
            textoDinamico.classList.add('texto-destacado');
        } else {
            textoDinamico.textContent = 'Clique nos botões abaixo para ver o JavaScript em ação!';
            textoDinamico.classList.remove('texto-destacado');
        }
        
        // Atualizar o contador
        atualizarContador();
    });
    
    // Evento de clique para o botão de mudar cor
    btnCor.addEventListener('click', function() {
        // Alternar a classe que muda a cor de fundo
        const card = document.querySelector('.card');
        card.classList.toggle('fundo-colorido');
        
        // Atualizar o contador
        atualizarContador();
    });
    
    // Evento de clique para o botão de aumentar texto
    btnTamanho.addEventListener('click', function() {
        // Alternar a classe que muda o tamanho do texto
        textoDinamico.classList.toggle('texto-grande');
        
        // Atualizar o contador
        atualizarContador();
    });
});
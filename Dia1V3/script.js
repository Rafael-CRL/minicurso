document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos necessários
    const cards = document.querySelectorAll('.card');
    const moreInfoButtons = document.querySelectorAll('.more-info-btn');
    const likeButtons = document.querySelectorAll('.like-btn');
    const showAllButton = document.getElementById('show-all');
    const showLikedButton = document.getElementById('show-liked');
    
    // Expandir/recolher descrições
    moreInfoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const shortDesc = card.querySelector('.description-short');
            const fullDesc = card.querySelector('.description-full');
            
            shortDesc.classList.toggle('hidden');
            fullDesc.classList.toggle('hidden');
            
            if (fullDesc.classList.contains('hidden')) {
                this.textContent = 'Saiba Mais';
            } else {
                this.textContent = 'Ver Menos';
            }
        });
    });
    
    // Sistema de curtidas
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const heart = this.querySelector('.heart');
            const likeCount = this.querySelector('.like-count');
            
            card.classList.toggle('liked');
            
            if (card.classList.contains('liked')) {
                heart.textContent = '♥'; // Coração preenchido
                heart.style.color = '#e74c3c'; 
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
                heart.style.animation = 'pulse 0.3s';
            } else {
                heart.textContent = '♡'; // Coração vazio
                heart.style.color = '';
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
            }
            
            setTimeout(() => {
                heart.style.animation = '';
            }, 300);
        });
    });
    
    // Filtro de cards
    showAllButton.addEventListener('click', function() {
        this.classList.add('active');
        showLikedButton.classList.remove('active');
        
        cards.forEach(card => {
            card.classList.remove('hidden-card');
            card.style.animation = 'fadeIn 0.5s';
        });
    });
    
    showLikedButton.addEventListener('click', function() {
        this.classList.add('active');
        showAllButton.classList.remove('active');
        
        cards.forEach(card => {
            if (card.classList.contains('liked')) {
                card.classList.remove('hidden-card');
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.classList.add('hidden-card');
            }
        });
    });
});
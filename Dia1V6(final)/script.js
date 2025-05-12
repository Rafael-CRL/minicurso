// Seleções iniciais
const postContainer = document.querySelector('.posts');
const formPost = document.querySelector('.post-form');

// Função para criar e inserir um card de post
function addPost({ title, text }) {
  const card = document.createElement('div');
  card.classList.add('post-card');

  card.innerHTML = `
    <h2>${title}</h2>
    <p class="post-text">${text}</p>
    <a href="#" target="_blank" class="btn read-more-btn">Leia mais</a>
  `;

  postContainer.appendChild(card);
}

// Evento de submissão do formulário
formPost.addEventListener('submit', e => {
  e.preventDefault();

  const newPost = {
    title: document.querySelector('#post-title').value.trim(),
    text: document.querySelector('#post-text').value.trim(),
  };

  // Validação simples
  if (!newPost.title || !newPost.text) return;

  addPost(newPost);
  formPost.reset();
});
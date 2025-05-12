// C. JS: Seleções iniciais
const postContainer = document.querySelector('#post-container');
const formPost      = document.querySelector('#form-post');

// Função para criar e inserir um card de post
function addPost({ title, subtitle, img, link, text }) {
  const card = document.createElement('article');
  card.classList.add('post-card');

  card.innerHTML = `
    <h2>${title}</h2>
    <h3>${subtitle}</h3>
    <img src="${img}" alt="Imagem de ${title}">
    <p>${text}</p>
    <a href="${link}" target="_blank">Leia mais</a>
  `;

  postContainer.appendChild(card);
}

// C. JS: Evento de submissão do formulário
formPost.addEventListener('submit', e => {
  e.preventDefault();

  const newPost = {
    title:    document.querySelector('#post-title').value.trim(),
    subtitle: document.querySelector('#post-subtitle').value.trim(),
    img:      document.querySelector('#post-img').value.trim(),
    link:     document.querySelector('#post-link').value.trim(),
    text:     document.querySelector('#post-text').value.trim(),
  };

  // Validação simples
  if (!newPost.title || !newPost.subtitle || !newPost.img || !newPost.link || !newPost.text)
    return;

  addPost(newPost);
  formPost.reset();
});

// D. JS: (Opcional) futura expansão para filtro ou favoritos

document.addEventListener("DOMContentLoaded", function () {
    const respostasCorretas = {
      "pergunta 1": "HTML",
      "pergunta 2": "Desenvolvimento web é a criação de sites e aplicações que funcionam na internet, usando linguagens como HTML, CSS e JavaScript. ",
      "pergunta 3": "CSS",
      "pergunta 4": "Adicionar interatividade e comportamentos dinâmicos às páginas web"
    };
  
    const botoes = document.createElement("button");
    botoes.textContent = "Verificar Respostas";
    botoes.style.display = "block";
    botoes.style.margin = "30px auto";
    document.querySelector("main").appendChild(botoes);
  
    botoes.addEventListener("click", () => {
      let acertos = 0;
  
      Object.keys(respostasCorretas).forEach(pergunta => {
        const selecionado = document.querySelector(`input[name="${pergunta}"]:checked`);
        const section = selecionado?.closest("section");
  
        if (!selecionado) return;
  
        const label = selecionado.nextElementSibling;
  
        if (selecionado.value === respostasCorretas[pergunta]) {
          label.classList.add("correct");
          acertos++;
        } else {
          label.classList.add("incorrect");
        }
      });
  
      alert(`Você acertou ${acertos} de 4 perguntas.`);
    });
  });
  
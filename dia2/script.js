const redes = [
    {
      url: "https://wa.me/559192623311",
      classe: "whatsapp",
      icone: "fab fa-whatsapp"
    },
    {
      url: "https://www.facebook.com/FASIUFPA", // Substitua pelo seu link real
      classe: "facebook",
      icone: "fab fa-facebook-f"
    },
    {
      url: "https://www.instagram.com/fasi_cameta/",
      classe: "instagram",
      icone: "fab fa-instagram"
    }
  ];
  
  const container = document.createElement('div');
  container.className = 'botoes-flutuantes';
  
  redes.forEach(rede => {
    const a = document.createElement('a');
    a.href = rede.url;
    a.target = "_blank";
    a.className = rede.classe;
  
    const icon = document.createElement('i');
    icon.className = rede.icone;
  
    a.appendChild(icon);
    container.appendChild(a);
  });
  
  document.body.appendChild(container);
  
  
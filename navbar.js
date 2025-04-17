document.addEventListener("DOMContentLoaded", function () {
  const usuarioLogado = localStorage.getItem("usuario");

  const nomeSorveteria = "Gelato Gourmet";
  const sloganSorveteria = "A melhor sorveteria da cidade!";

  // Atualiza o título da aba
  document.title = nomeSorveteria;

  // Atualiza o header, se existir
  const headerEl = document.querySelector("header");
  if (headerEl) {
    headerEl.innerHTML = `
      <h1>${nomeSorveteria}</h1>
      <p>${sloganSorveteria}</p>
    `;
  }

  // Menu de navegação
  const menu = `
    <nav class="navbar navbar-expand-lg" style="background-color: #333;">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link text-white" href="index.html">Início</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="cardapio.html">Cardápio</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="promocoes.html">Promoções</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="contato.html">Contato</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="quemsomos.html">Sobre</a></li>
          </ul>
          <ul class="navbar-nav">
            ${
              usuarioLogado
                ? `
                  <li class="nav-item">
                    <a class="nav-link text-white">Olá, ${usuarioLogado}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#" id="logout">Sair</a>
                  </li>
                `
                : `
                  <li class="nav-item">
                    <a class="nav-link text-white" href="login.html">Olá, faça seu login</a>
                  </li>
                `
            }
          </ul>
        </div>
      </div>
    </nav>
  `;
  document.getElementById("menu-container").innerHTML = menu;

  // Rodapé moderno
  const rodape = `
  <footer class="footer mt-5 text-white pt-4 pb-3" style="background-color: #333;">
    <div class="container">
      <div class="row text-center text-md-start">
        <div class="col-md-3 mb-3">
          <h5>Institucional</h5>
          <ul class="list-unstyled">
            <li><a href="quemsomos.html" class="text-white text-decoration-none">Quem Somos</a></li>
            <li><a href="contato.html" class="text-white text-decoration-none">Contato</a></li>
            <li><a href="#" class="text-white text-decoration-none">Política de Privacidade</a></li>
          </ul>
        </div>

        <div class="col-md-3 mb-3">
          <h5>Atendimento</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-telephone"></i> (11) 9999-9999</li>
            <li><i class="bi bi-envelope"></i> contato@gelatogourmet.com</li>
            <li><i class="bi bi-clock"></i> Seg a Sáb: 10h - 18h</li>
          </ul>
        </div>

        <div class="col-md-3 mb-3">
          <h5>Segurança</h5>
          <img src="Imagens/SSLBilnd.jpeg" alt="Selo SSL" width="70" class="mb-1 d-block mx-auto mx-md-0">
          <img src="Imagens/SiteBlindado.png" alt="Selo SSL" width="70" class="mb-1 d-block mx-auto mx-md-0">
          <img src="Imagens/SeguroCertificado.jpg" alt="Selo SSL" width="70" class="mb-1 d-block mx-auto mx-md-0">
          
        </div>

        <div class="col-md-3 mb-3">
          <h5>Fique Conectado</h5>
          <a href="#" class="text-white me-2"><i class="bi bi-facebook fs-4"></i></a>
          <a href="#" class="text-white me-2"><i class="bi bi-instagram fs-4"></i></a>
          <a href="#" class="text-white"><i class="bi bi-whatsapp fs-4"></i></a>
        </div>
      </div>

      <div class="row mt-3">
  <div class="col text-center">
    <div class="mb-2">Formas de pagamento:</div>
    <div class="d-flex justify-content-center align-items-center gap-3 flex-wrap">
      <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" height="32">
      <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" height="32">
      <img src="https://img.icons8.com/color/48/amex.png" alt="American Express" height="32">
      <img src="https://img.icons8.com/color/48/diners-club.png" alt="Diners Club" height="32">
    </div>
  </div>
</div>




      <hr class="bg-white mt-4">
      <p class="text-center mb-0">&copy; 2025 ${nomeSorveteria}. Todos os direitos reservados.</p>
    </div>
  </footer>
  `;

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = rodape;
  }

  // Estilos extras
  const estilosExtras = document.createElement("style");
  estilosExtras.textContent = `
    html {
      scroll-behavior: smooth;
    }

    .whatsapp-float {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      background-color: #25d366;
      color: white;
      border-radius: 50%;
      text-align: center;
      font-size: 30px;
      z-index: 1000;
      box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease;
    }

    .whatsapp-float:hover {
      transform: scale(1.1);
    }

    #btn-topo {
      position: fixed;
      bottom: 90px;
      right: 20px;
      background-color: #f8f9fa;
      border: none;
      padding: 10px 12px;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      cursor: pointer;
      display: none;
      z-index: 9999;
    }

    body {
      opacity: 0;
      transition: opacity 0.6s ease-in-out;
    }

    body.visivel {
      opacity: 1;
    }
  `;
  document.head.appendChild(estilosExtras);

  // Botão flutuante WhatsApp
  const zapImg = document.createElement("a");
  zapImg.href = "https://wa.me/5599999999999"; // Substitua pelo número real
  zapImg.className = "whatsapp-float";
  zapImg.target = "_blank";
  zapImg.title = "Fale com a gente no WhatsApp";
  zapImg.innerHTML = `<i class="bi bi-whatsapp"></i>`;
  document.body.appendChild(zapImg);

  // Botão Voltar ao Topo
  const botaoTopo = document.createElement("button");
  botaoTopo.id = "btn-topo";
  botaoTopo.innerHTML = `<i class="bi bi-arrow-up"></i>`;
  document.body.appendChild(botaoTopo);

  window.addEventListener("scroll", function () {
    botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
  });

  botaoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Logout
  const btnLogout = document.getElementById("logout");
  if (btnLogout) {
    btnLogout.addEventListener("click", function () {
      localStorage.removeItem("usuario");
      window.location.href = "index.html";
    });
  }

  // Suavizar a entrada da página
  window.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("visivel");
  });

  // Scroll suave para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

// Suavizar entrada da página
window.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("visivel");
});

// Pré-carregador
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 500);
  }
});

// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// (Opcional) Inicializar AOS se você estiver usando
if (typeof AOS !== "undefined") {
  AOS.init();
}



});

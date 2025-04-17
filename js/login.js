// login.js
function fazerLogin() {
    const emailInput = document.getElementById("email");
    if (emailInput) {
      const email = emailInput.value;
      if (email) {
        const nomeUsuario = email.split("@")[0]; // pega o nome antes do @
        localStorage.setItem("usuario", nomeUsuario);
        window.location.href = "index.html"; // redireciona após login
      } else {
        alert("Por favor, digite seu e-mail.");
      }
    } else {
      console.error("Campo de e-mail não encontrado.");
    }
  }
  
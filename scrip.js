document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const erroMsg = document.getElementById("erroMsg");

  // login básico de exemplo
  if (usuario === "admin" && senha === "1234") {
    erroMsg.textContent = "";
    document.querySelector(".login-container").style.animation = "fadeOut 0.8s forwards";

    setTimeout(() => {
      // 👉 Redireciona para a página 2

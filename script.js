// Validação básica do formulário de contato
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Mensagem enviada com sucesso!");
    this.reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

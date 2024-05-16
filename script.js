document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); //Impedir o envio do formulário
  
    // Obtendo valores de formulário
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
  
  
    // Simular o envio de dados para o servidor
    setTimeout(function() {
      // Exibir mensagem de sucesso
      document.getElementById('status-message').textContent = 'Mensagem enviada com sucesso!';
  
      // Limpar campos do formulário
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('comment').value = '';
    }, 1000);  // Simulando atraso de 1 segundo para envio de dados
  });
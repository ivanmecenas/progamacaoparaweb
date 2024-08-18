document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado pelo seu interesse! Você receberá nosso catálogo no email informado.');
    this.reset();
});


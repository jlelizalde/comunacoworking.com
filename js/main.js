// Formspree contact form submit (http://formspree.io/)
var contactForm = $("#contact-form");
contactForm.submit(function(e){
  e.preventDefault();
  $.ajax({
    url: '//formspree.io/jler.152@gmail.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      console.log('Se esta enviando el formulario');
    },
    success: function(data) {
      alert('Gracias por tu inter\xE9s, espera escuchar de nosotros pronto');
      console.log(data);
    },
    error: function(err) {
      alert('Algo ha salido mal');
    }
  });
})
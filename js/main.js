// from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(function() {
    $('#job-opennings').click(function(event) {
        event.preventDefault();
        $(this).animateCss('wobble');
        swal('Pronto tendremos más noticias');
    });

    $contactForm = $('#contact-form');
    $contactForm.submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: '//formspree.io/comuna.coworking@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(data) {
                swal("¡Gracias por tu interés!", "En breve nos comunicaremos contigo!", "success")
            },
            error: function(err) {
                swal("Algo salió mal", ":(", "error")
            }
        });
     
    });
});
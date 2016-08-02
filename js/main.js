// Scrolling functions and such
$(function() {
    //Smooth scrolling on any anchor. Taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({scrollTop: target.offset().top}, 1000);
                return false;
            }
        }
    });
    //on scroll, show the back to top button
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1){ //if user has scrolled the window
            $('.backToTop').fadeIn(500); // show the back to top button
        }else { // else if user is at the top already
            $('.backToTop').fadeOut(500); //hide the back to top button
        }
    });
    //scroll the page to the top if user clicks on the back to top button
    $('.backToTop').click(function(){$('html,body').animate({ scrollTop: 0 }, 'slow');});
    //If page was already scrolled down before load show the back to top button
    if($(window).scrollTop() >= 1){$('.backToTop').show();}
});


// jQuery extend function to animate elements
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(function() {

    // Animate arrows every x seconds
    // var time = 10000; // 10 seconds
    // var timer = setInterval(function(){
    //     $('.glyphicon-menu-down').animateCss('bounce');
    //     console.log('debería estar animando');
    // }, time);

    // Animate job openings button on click
    $('#job-opennings').click(function(event) {
        event.preventDefault();
        $(this).animateCss('wobble');
        swal('Pronto tendremos más noticias');
    });

    // Show a sweet alert on form submit
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
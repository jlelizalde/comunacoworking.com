$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling : false,
        fitToSection : false,
        anchors : [
            'data-header','data-primer-comentario','data-servicios',
            'data-segundo-comentario','data-membresias','data-tercer-comentario',
            'data-rentas',
            // 'data-cuarto-comentario',
            'data-contacto','data-footer'
        ]
    });

});
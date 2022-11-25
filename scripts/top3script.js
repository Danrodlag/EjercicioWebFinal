
// Usando JQuery me funcionaba
$(document).ready(function() {

    // Evento on click
    $(".leermas").on("click", function() {

        // Buscamos el id del leermas que se ha clicado (Me sale que se esta en desuso pero no encontre otra forma)
        var suid = event.target.id  

        // Cambiar la visibilidad del texto, pasandole los 3 id de los diferentes parrafos
        var totales = ["#total1", "#total2", "#total3"];  
        $(totales[Number(suid)-1]).toggle();

        // Cambiar el texto del boton dependiendo del texto actual
        if ($(this).text() == "Leer menos...") {
          $(this).text("Leer mas...");
        } else {
          $(this).text("Leer menos...");
        }
    });
});
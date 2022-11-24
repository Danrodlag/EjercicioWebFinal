$(document).ready(function() {
    $(".leermas").on("click", function() {
        var suid = event.target.id
        // cambiar la visibilidad de complete
        var totales = ["#total1", "#total2", "#total3"];
        $(totales[Number(suid)-1]).toggle();
        
        // cambiar el texto del boton dependiendo del texto actual
        if ($(this).text() == "Leer menos...") {
          $(this).text("Leer mas...");
        } else {
          $(this).text("Leer menos...");
        }
    });
  });
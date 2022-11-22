
var IMAGENES = ['img/inicio//carrusel/1.png','img/inicio//carrusel/2.png','img/inicio//carrusel/3.png'];
var img = new Image();
var posicionActual = 0;
var intervalo;
function pasar_foto() {
    if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    console.log(posicionActual);
    document.getElementById("tododiscos").src = IMAGENES[posicionActual];
    
};
console.log("Funciono");
const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
intervalo = setInterval(pasar_foto, TIEMPO_INTERVALO_MILESIMAS_SEG);


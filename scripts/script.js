
var IMAGENES = ['img/inicio//carrusel/1.png','img/inicio//carrusel/2.png','img/inicio//carrusel/3.png'];
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

function pedirenlace(){
    var enlaces = document.getElementsByTagName("a")
    var pregunta = window.prompt("¿Cuántos enlaces crees que tiene esta página?")
    if (pregunta == enlaces.length){
        window.alert(`Muy bien, has acertado tiene ${enlaces.length} enlaces`);
    } else if (pregunta == null){
        window.alert("Vale, ya lo pillo. No te apetece contestar... Otra vez será...")
    } else {
        window.alert(`Ups... me temo que te has equivocado hay ${enlaces.length} enlaces. Más suerte la próxima vez...`)
    }
};

function pediremosnlaces(){
    setTimeout(pedirenlace, 15000);
};



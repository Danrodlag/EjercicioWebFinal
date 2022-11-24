/*Carrusel de imágenes, donde la primera es aleatoria */
/* Iniciamos la lista con las rutas a las imágenes */
var IMAGENES = ['img/inicio//carrusel/1.png','img/inicio//carrusel/2.png','img/inicio//carrusel/3.png'];

/* Creamos la variable con la posición de la lista que pasaremos, de forma aleatoria */
var posicionActual = Math.floor(Math.random() * 2);

/* Pasamos la primera imagen aleatoria */
var intervalo;
document.getElementById("tododiscos").src = IMAGENES[posicionActual]

/* Creamos la función pasar foto, que irá pasando por todas las imágenes */
function pasar_foto() {
    if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    document.getElementById("tododiscos").src = IMAGENES[posicionActual];  
};

/* Creamos la variable del intervalo de cambio que pasaremos */
const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
/* Usamos la función setInterval para cada 5 segundos ejecutar la función */
intervalo = setInterval(pasar_foto, TIEMPO_INTERVALO_MILESIMAS_SEG);


/* Para lo próximo, crearemos la función pedirenlace, que se ejecutará desde pediremos enlaces, que le da un retraso */
function pedirenlace(){

    /* Cogemos todos los enlaces del html */
    var enlaces = document.getElementsByTagName("a")

    /* Preguntamos cuantos enlaces cree el usuario que tiene la web */
    var pregunta = window.prompt("¿Cuántos enlaces crees que tiene esta página?")

    /* Si acierta */
    if (pregunta == enlaces.length){
        /* Mandar un mensaje de que está bien */
        window.alert(`Muy bien, has acertado tiene ${enlaces.length} enlaces`);

    /* Si le da a cancelar, que mande otro mensaje */
    } else if (pregunta == null){
        window.alert("Vale, ya lo pillo. No te apetece contestar... Otra vez será...")
    
    /* Y si falla, decirle cuantos hay */
    } else {
        window.alert(`Ups... me temo que te has equivocado hay ${enlaces.length} enlaces. Más suerte la próxima vez...`)
    }
};

/* Esta es la función que le da el retraso */
function pediremosnlaces(){
    setTimeout(pedirenlace, 15000);
};

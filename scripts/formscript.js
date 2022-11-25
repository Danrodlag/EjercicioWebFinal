
/* Creamos las variables para donde escribir los datos */
const output = document.querySelector("#dias");
const outputh = document.querySelector("#horas");

/* Creamos la funcion de forma const funcionaba mejor así */
const countDown = () => {

    /* Cogemos las horas y días de referencia y las actuales */
    const countDownDate = new Date("2022-11-30T00:00").getTime();
    const now = new Date().getTime();

    /* Calculamos la diferencia entre un día y otro */
    const distance = countDownDate - now;

    /* Aquí calculamos exactamente los días, horas, minutos y segundo */
    const dd = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hh = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const mm = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const ss = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    

    /* Decimos que si la distancia es menor o igual a 0 que se ponga un espacio vacío*/
    if(distance <= 0) {
        output.innerText = "";
        outputh.innerText = "";
    } else {
        /* Le pasamos los datos al html */
        output.innerText = `${dd} Día`;
        outputh.innerText = `${hh}h ${mm}' ${ss}"`;
    }
};

/* Cuerpo principal */
countDown();
setInterval(countDown, 1000);


/* Función que crea la tabla con los datos */
$(function () {
    "use strict";

    /* Aqui escribimos el id donde está la tabla, y con la librería jqGrid, añadimos la tabla con las columnas y los datos */ 
    $("#tablarank").jqGrid({
        colModel: [
            { name: "Intérprete" },
            { name: "Canción" },
            { name: "NºDescargas"},
            { name: "Precio"},
            { name: "Versionado", template: "booleanCheckbox"},
            { name: "ÚltDescarga"} 
        ],
        data: [
            { id: 10, Intérprete: "Joan Manuel Serrat", Canción: "Mediterráneo", NºDescargas: "1334987", Precio: "1.25", Versionado: false, ÚltDescarga: "02-Sep-2021"  },
            { id: 20, Intérprete: "Natalia Dicenta", Canción: "Summertime", NºDescargas: "827994", Precio: "1.05", Versionado: true, ÚltDescarga: "12-Oct-2021" },
            { id: 30, Intérprete: "Andrea Mois Quartet", Canción: "He's funny that way", NºDescargas: "672910", Precio: "0.80", Versionado: true, ÚltDescarga: "28-Jul-2021" },
            { id: 40, Intérprete: "Los Ronaldos", Canción: "Adiós Papá", NºDescargas: "513845", Precio: "1.00", Versionado: false, ÚltDescarga: "5-Aug-2021" },
            { id: 50, Intérprete: "Pablo Alborán", Canción: "Inséparables", NºDescargas: "421990", Precio: "0.90", Versionado: false, ÚltDescarga: "14-May-2021"  },
            { id: 60, Intérprete: "Rozalén", Canción: "80 veces", NºDescargas: "355682", Precio: "0.95", Versionado: false, ÚltDescarga: "30-Aug-2021"  },
            { id: 70, Intérprete: "Pedro Guerra", Canción: "Niños", NºDescargas: "202347", Precio: "1.15", Versionado: false, ÚltDescarga: "23-Sep-2021"  },
            { id: 80, Intérprete: "Rosalía", Canción: "Me quedo contigo", NºDescargas: "117906", Precio: "1.20", Versionado: true, ÚltDescarga: "31-Jul-2021"  }
        ],
        /*  Le pasamos pager y rownum para que haga páginas con un máximo de 5 filas por página */
        pager: true ,
        rowNum: 5,
    });
});
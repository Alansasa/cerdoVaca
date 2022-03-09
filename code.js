var id = document.getElementById("areadibujo");
var lienzo = id.getContext("2d");

var fondo = {
    url : "tile.png",
    cargaOK : false
};

var cerdo = {
    url : "cerdo.png",
    cargaOK : true
};

var vaca = {
    url : "vaca.png",
    cargaOK : true
};

var teclas = {
    LEFT : 37,
    RIGHT :39,
    DOWN : 40,
    UP : 38 
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", insertarImagen);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", insertarImagen);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", insertarImagen);

//AGREGANDO EVENTOS;
document.addEventListener("keyup", insertarImagen);
document.addEventListener("mousedown", insertarImagen);

//buttons, es la forma en la que se identifican los clicks del mouse;
    var mouse = {
        LEFT : 1,
        RIGHT : 2
    };
    
// "tx" y "ty", son las coordenadas de "x" y "y", desde las que partira la imagen del cerdo. 
    var cx = 210;
    var cy = 210;

/* "vx" y "vy", son las pocisiones en "x" y en "y", desde las que partira la imagen de la vaca
pero para aqui solo sera necesario definirlas sin darle algun valor.*/
    var vx, vy;

function insertarImagen(evento){

    fondo.cargaOK = true;
    if (fondo.cargaOK == true){
    lienzo.drawImage(fondo.imagen, 0, 0);
    }
   
    // codigo para el cerdo.
        switch (evento.keyCode){
            case teclas.RIGHT:
                lienzo.drawImage(cerdo.imagen, cx + 10, cy);
                cx = cx + 10;
                cy = cy;
            break;
            case teclas.UP:
                lienzo.drawImage(cerdo.imagen, cx, cy - 10);
                cx = cx;
                cy = cy - 10;
            break;
            case teclas.LEFT:
                lienzo.drawImage(cerdo.imagen, cx - 10, cy);
                cx = cx - 10;
                cy = cy;
            break;
            case teclas.DOWN:
                lienzo.drawImage(cerdo.imagen, cx, cy + 10);
                cx = cx;
                cy = cy + 10;
    }

    // CODIGO PARA LA VACA;
/*"vx" y "vy", son las variables que definimos anteriormente fuera de la funcion, pero ahora que estan
dentro de ella, podemos agregarle el valor correspondiente, osea las coordenadas desde las que
partira la imagen de la vaca. */
    vx = evento.layerX;
    vy = evento.layerY;
/* "evento.buttons", es la forma de identificar el click que ha sido presionado,
el click izquierdo recibe el valor 1, y el click derecho el valor 2.
"mouse.LEFT*, es el objeto que definimos al principio, que hace referencia al click izquierdo osea
 el valor 1. */

    if (evento.buttons == mouse.LEFT){
        lienzo.drawImage(vaca.imagen, vx, vy);
        vx = evento.layerX;
        vy = evento.layerY;
        /*es importante definir nuevamente el nuevo valor que recibirian las coordenadas si el
        evento ocurre, para que de esta forma pueda dibujarse con las nuevas pocisiones.*/
    }
}











var cajapequena = document.getElementById("minibox");
var cuerpo = document.querySelector("body");
var css =document.getElementById('cssArchivo');

var textocajapequeña = document.querySelector('.letrasmini');
var textfuera =document.querySelector('.letrasbox');

var posicion=1;

cuerpo.addEventListener("keydown", function () {
        document.onkeydown = movimiento();
        console.log(posicion);
});


// POSICIONES:
// 1 arribaizquierda
// 2 arribaderecha
// 3 abajoizquierda
// 4 abajoderecha

function movimiento(e) {
    e = e || window.event;

    // LLEGA LA POSICION AL IFDONDE ESTABA Y DEVUELVE LA QUE VA


    if (e.keyCode == "87" && (posicion==3 || posicion==4)) {
        // up arrow
        cajapequena.style.marginTop = "0px";
        
        if(posicion==3){
            css.setAttribute("href","css/colorfull.css")
            cajapequena.style.boxShadow = "10px 10px 0 rgba(0, 0, 0, 0.418)";
            posicion=1;
        }
        if(posicion==4){
            css.setAttribute("href","css/colorfull.css")
            cajapequena.style.boxShadow = "-10px 10px 0 rgba(0, 0, 0, 0.418)";
            posicion=2;
        }
    
    } else if (e.keyCode == "83" && (posicion==1 || posicion==2)) {
        // down arrow
        cajapequena.style.marginTop = "175px";
        
        if(posicion==1){
            css.setAttribute("href","css/ByW.css");
            cajapequena.style.boxShadow = "10px -10px 0 rgba(0, 0, 0, 0.418)";
            posicion=3;
        }
        if(posicion==2){
            css.setAttribute("href","css/ByW.css")
            cajapequena.style.boxShadow = "-10px -10px 0 rgba(0, 0, 0, 0.418)";
            posicion=4;
        }
        
        
    } else if (e.keyCode == "65" && (posicion==2 || posicion==4)) {
        // left arrow
        cajapequena.style.marginLeft = "0px";
     
        if(posicion==2){
            css.setAttribute("href","css/colorfull.css")
            cajapequena.style.boxShadow = "10px 10px 0 rgba(0, 0, 0, 0.418)";
            posicion=1;
        }
        if(posicion==4){
            css.setAttribute("href","css/ByW.css")
            cajapequena.style.boxShadow = "10px -10px 0 rgba(0, 0, 0, 0.418)";
            posicion=3;
        }

    } else if (e.keyCode == "68" && (posicion==1 || posicion==3)) {
        // right arrow
        cajapequena.style.marginLeft = "175px";
       
        if(posicion==1){
            css.setAttribute("href","css/colorfull.css")
            cajapequena.style.boxShadow = "-10px 10px 0 rgba(0, 0, 0, 0.418)";
            posicion=2;
        }
        if(posicion==3){
            css.setAttribute("href","css/ByW.css")
            cajapequena.style.boxShadow = "-10px -10px 0 rgba(0, 0, 0, 0.418)";
            posicion=4;
        }
    }

    cambioTextos();

}
function cambioTextos(){
    if(posicion==1){
        textocajapequeña.innerHTML="Hi!"
        textfuera.innerHTML="I am <br><strong>Alejandro.</strong>"
    }
    if(posicion==2){
        textocajapequeña.innerHTML="Your"
        textfuera.innerHTML="Trusted <br>Junior <br> <strong>Full Stack!</strong>"
    }
    if(posicion==3){
        textocajapequeña.innerHTML="And"
        textfuera.innerHTML="I am currently<br> <strong>working.</strong>"
    }
    if(posicion==4){
        textocajapequeña.innerHTML="I"
        textfuera.innerHTML="am <strong>Web</strong>,  and<strong> Mobile </strong>developer."
    }
}
var valora;
var valorb;
var operacion;

function calculadora(){

    // NUMEROS

    var pantalla = document.getElementById("pantalla");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    // OPERACIONES
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");
    var clear = document.getElementById("clear");

    // IGUAL
    var igual = document.getElementById("igual");

    // EVENTOS NUMEROS

    uno.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "1";
    }

    dos.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "2";
    }

    tres.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "3";
    }

    cuatro.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "4";
    }

    cinco.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "5";
    }

    seis.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "6";
    }

    siete.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "7";
    }

    ocho.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "8";
    }

    nueve.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "9";
    }

    cero.onclick = function name(e){
        pantalla.textContent = pantalla.textContent + "0";
    }


    // EVENTOS OPERACIONES

    sumar.onclick = function(e){
        valora = pantalla.textContent;
        operacion = "+";
        vaciar ();
    }

    restar.onclick = function (e){
        valora = pantalla.textContent;
        operacion = "-";
        vaciar ();
    }

    multiplicar.onclick = function (e){
        valora = pantalla.textContent;
        operacion = "*";
        vaciar ();
    }

    dividir.onclick = function (e){
        valora = pantalla.textContent;
        operacion = "/";
        vaciar ();
    }

    clear.onclick = function (e) {
        resetear();
    }

    igual.onclick = function (e) {
        valorb = pantalla.textContent;
        resolver();
    }
    
}

function vaciar () {
    pantalla.textContent = "";
}

function resetear() {
    pantalla.textContent = "";
    valora = 0;
    valorb = 0;
    operacion = "";
}



function resolver() {
    var resultado = 0;
    switch(operacion) {
        case "+":
            resultado = parseFloat(valora) + parseFloat(valorb);
            break;

        case "-":
            resultado = parseFloat(valora) - parseFloat(valorb);
            break;
    

        case "*":
            resultado = parseFloat(valora) * parseFloat(valorb);
            break;

        case "/":
            resultado = parseFloat(valora) / parseFloat(valorb);
            break;

        default:
            break;
    }
    pantalla.textContent = resultado
}
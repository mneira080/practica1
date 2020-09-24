'use strict'

var numero;
var intento = 0;
var numeroDeUsuario;
var numeroAleatorio = 0;

function comprobarNumero(num){    
    
    if(num<=0 || num >100 || isNaN(num)){
        return false;
    }else{
        return true;
    }
       
}
//----------------------------------------------------------------------
function generarNumAleatorio(){
   return Math.floor((Math.random() * 99) + 1);
}
//----------------------------------------------------------------------

function juegaElOrdenador(){
    setTimeout(alert("Ahora me toca a mí, "),5000);
}

do {
    numero = parseInt(prompt("Introduce un número entre el 1 - 100: "));
    console.log(numero);
}while(!comprobarNumero(numero))


document.write("<h3> El número elegido es: "+ numero + "</h3>");

while(numeroAleatorio != numero)
{
    intento++;
    numeroAleatorio = generarNumAleatorio();
    document.write("Intento " + intento + " Número: " + numeroAleatorio + "</br>");    
}

document.write("<h4>Haz utilizado "+ intento + " intentos, el número era: " + numero + "</h4>");

juegaElOrdenador();




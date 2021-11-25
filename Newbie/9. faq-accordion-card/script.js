
function separador(cadenaAdividir, separador){
    var array = cadenaAdividir.split(separador);
    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

let text = `"Eres el 'mejor' "Yomarcs"`;

// separador(text,",");
separador(text,"");

// function dividirCadena(cadenaADividir,separador) {
//     var arrayDeCadenas = cadenaADividir.split(separador);
//     console.log('La cadena original es: "' + cadenaADividir + '"');
//     console.log('El separador es: "' + separador + '"');
//     console.log("El array tiene " + arrayDeCadenas.length + " elementos: ");
 
//     for (var i=0; i < arrayDeCadenas.length; i++) {
//        console.log(arrayDeCadenas[i]);
//     }

//     console.log();
//  }
 
//  var cadenaVerso = "Oh brave new world that has such people in it.";
//  var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
 
//  var espacio = " ";
//  var coma = ",";
 
//  dividirCadena(cadenaVerso, espacio);
//  dividirCadena(cadenaVerso);
//  dividirCadena(cadenaMeses, coma);
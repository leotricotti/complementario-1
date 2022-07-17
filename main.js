//Conversor de millas a kilometros

let millas;
let kilometros;
let continuar; 

while(continuar != "n" ){
    millas = parseFloat(prompt("Ingrese la cantidad de millas: "));
    kilometros = millas / 1.60;
    alert(`Sus millas equivalen a: ${kilometros.toFixed(2)} kilometros.`);
    continuar = prompt("Desea hacer un nuevo calculo? s/n: ");
}

alert("Gracias por utilizar nuestros servicios.");
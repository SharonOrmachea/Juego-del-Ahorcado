// let palabras = localStorage.getItem("palabras")
let palabras = ["HTML", "CSS", "PYTHON"];
// console.log(localStorage);

let almacenamiento = localStorage.getItem(guardarPalabra) || palabras;
// console.log(almacenamiento);

function seccionAgregarPalabras(){
    document.getElementById("BotonesPP").style.display = "none";
    document.getElementById("SeccionAgregarPalabras").style.display = "inherit";
}

function guardarPalabra(){
    let palabra = document.getElementById("texto").value
    
    console.log(palabras);
    // if adentro de un for que esta adentro del if
    if (palabra.length < 9 && palabra != palabras.forEach){
        // palabras.push(palabra);
        localStorage.setItem("texto", palabra);
        document.getElementById("texto").value = "";
    } 
    else if ( 8 < palabra.length){
        console.log("La palabra no puede contener más de 8 caracteres");
        document.getElementById("texto").value = "";
    } else if (palabra == palabras.forEach){
        console.log("La palabra ingresada ya está guardada");
        document.getElementById("texto").value = "";
    }

    console.log(palabras);
    console.log(almacenamiento);
    console.log(localStorage);
}

function volver(){
    
    document.getElementById("SeccionAgregarPalabras").style.display = "none";
    
    document.getElementById("BotonesPP").style.display = "block";
}

function iniciarJuego(){
    console.log("Hola");
}


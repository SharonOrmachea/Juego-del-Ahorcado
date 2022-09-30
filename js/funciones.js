let palabras = ["HTML", "CSS", "PYTHON"];

// let almacenamiento = localStorage.getItem("WordList");

localStorage.setItem("listaPalabras", palabras)
let listaPalabras = localStorage.getItem("listaPalabras");

console.log(listaPalabras);
function seccionAgregarPalabras(){
    document.getElementById("BotonesPP").style.display = "none";
    document.getElementById("SeccionAgregarPalabras").style.display = "inherit";
}

function guardarPalabra(){
    let palabra = document.getElementById("texto").value

    if (palabra.length < 9){
        let contador = 0;
        for (let i = 0; i < listaPalabras.length; i++){
            if (palabra != listaPalabras[i]){
                contador++
            }
        }
        if (contador == listaPalabras.length){
            listaPalabras.push(palabra);
            localStorage.setItem("listaPalabras", palabra);

            
            console.log("La palabra se agregó correctamente")
        } else {
            console.log("La palabra ingresada ya está guardada");
        }
        
        
    } else {
        console.log("La palabra no puede contener más de 8 caracteres");
    }

    document.getElementById("texto").value = "";
    console.log(palabras);
    console.log(listaPalabras);
    console.log(localStorage);
}

function volver(){
    document.getElementById("texto").value = "";
    document.getElementById("SeccionAgregarPalabras").style.display = "none";
    document.getElementById("BotonesPP").style.display = "block";
}

function iniciarJuego(){
    console.log("Hola");
}


// Codigo de Variables

let listaPalabras = [];

let palabraSecreta = "";

let tablero = document.getElementById("ahorcado").getContext("2d");

let errores = 8;

// Codigo de Iniciar Juego

function iniciarJuego(){
    
    document.getElementById("BotonesPP").style.display = "none";
    document.getElementById("SeccionAgregarPalabras").style.display = "none";
    document.getElementById("apareceJuego").style.display = "inherit";
    document.getElementById("ahorcado").style.display = "inherit";
    
    palabraRandom();
    console.log(palabraSecreta);
    console.log(palabraSecreta.length);
    dibujarCanvas();
    dibujarLinea();

    document.onkeydown = (e) => {
        let letra = e.key.toLocaleUpperCase();
        

        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for (let i = 0; i < palabraSecreta.length; i++){
                if (palabraSecreta[i] === letra){
                    letraCorrecta(i);
                }
            }
        } else {
            añadirLetraIncorrecta(letra)
            letraIncorrecta(letra, errores);

        }
    }
}


function palabraRandom(){
    
    let lista = localStorage.getItem("listaPalabras");
    
    

    if (lista == null){
        listaPalabras = ["HTML", "CSS", "PYTHON"];
    } else {
        listaPalabras = JSON.parse(lista);
    }

    let cantLista = listaPalabras.length;
    let palabraAleatoria = Math.floor(Math.random() * cantLista);
    palabraSecreta = listaPalabras[palabraAleatoria];

}

function comprobarLetra(key){
    let estado = false;

    if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado
    } else {
        estado = true;
        console.log(key);
        return estado;
    }
}

function añadirLetraIncorrecta(){
    errores -= 1;
    console.log(errores);
}


// Codigo de Agregar Palabras

function seccionAgregarPalabras(){
    document.getElementById("BotonesPP").style.display = "none";
    document.getElementById("SeccionAgregarPalabras").style.display = "inherit";
    
}

function guardarPalabra(){
    let palabra = (document.getElementById("texto").value).toUpperCase();
    let lista = localStorage.getItem("listaPalabras");
    

    if (lista == null){
        listaPalabras = ["HTML", "CSS", "PYTHON"];
    } else {
        listaPalabras = JSON.parse(lista);
    }

    if (palabra.length < 9){
        let contador = 0;
        for (let i = 0; i < listaPalabras.length; i++){
            if (palabra != listaPalabras[i]){
                contador++
            }
        }
        if (contador == listaPalabras.length){
            listaPalabras.push(palabra);
            localStorage.setItem("listaPalabras", JSON.stringify(listaPalabras));
            console.log("La palabra se agregó correctamente");
        } else {
            console.log("La palabra ingresada ya está guardada");
        }
        
        
    } else {
        console.log("La palabra no puede contener más de 8 caracteres");
    }

    document.getElementById("texto").value = "";

}

function volver(){
    document.getElementById("texto").value = "";
    document.getElementById("SeccionAgregarPalabras").style.display = "none";
    document.getElementById("BotonesPP").style.display = "block";
}


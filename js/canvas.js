
function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#c7cc00";
    tablero.strokeStyle = "#000000";
    // Tamaño del canvas
    tablero.fillRect(0,0,1200,860);
    // Base de la ahorca
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#c7cc00";
    tablero.strokeStyle = "#000000";

    let ancho = 600/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (ancho * i), 640);
        tablero.lineTo(550 + (ancho * i), 640);
    }

    tablero.stroke();
    tablero.closePath();
    
}

function letraCorrecta(index){
    tablero.font = "bold 63px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000000";

    let ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 505 + (ancho*index), 620);
    tablero.stroke();

}

function letraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000000";
    tablero.fillText(letra, 535 + (40 * (10-errorsLeft)), 710, 40);
    
}
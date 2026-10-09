function calcularPuntaje() {
    let puntaje = 0;
    const respuesta1 = document.querySelector('input[name="p1"]:checked');
    const respuesta2 = document.querySelector('input[name="p2"]:checked');
    const respuesta3 = document.querySelector('input[name="p3"]:checked');
    if(respuesta1 && respuesta1.value === "correcto") puntaje++;
    if(respuesta2 && respuesta2.value === "correcto") puntaje++;
    if(respuesta3 && respuesta3.value === "correcto") puntaje++;
    const resultadoDiv = document.getElementById("resultado");
    if (puntaje === 3) {
        resultadoDiv.innerHTML = `<p style="color: #7b1fa2;"><strong>¡Excelente! Sos un experto en armar regalos únicos.¡Te esperamos!</strong></p>`;
    } else {
        resultadoDiv.innerHTML = `<p style="color: #ff007f;"><strong>Acercate ${puntaje} de 3. ¡Muy bien por intentarlo!</strong></p>`;
    }
}
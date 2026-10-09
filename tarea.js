const entrada = document.getElementById("entradaTarea");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");
if (botonAgregar && entrada && listaTareas) {
    botonAgregar.addEventListener("click", function() {
        const textoTarea = entrada.value.trim();
        if (textoTarea !== "") {
            alert("Por favor, escribir una tarea primero.");
            return;
        }
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;
        listaTareas.appendChild(nuevaTarea);
        entrada.value = "";
    });
}

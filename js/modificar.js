// Obtener la ID de la tarea de la URL
const params = new URLSearchParams(window.location.search);
const tareaId = params.get('id');

let tareas = [];

function cargarTareasDesdeLocal() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasGuardadas) {
      tareas = tareasGuardadas;
    }
    console.log(tareas)
}
cargarTareasDesdeLocal();


function pintarCampos() {
    const radioCompleta = document.getElementById('radio-completa');
    const radioIncompleta = document.getElementById('radio-incompleta');
    
    const tarea = tareas.find(tarea => tarea.id == tareaId);

    document.getElementById("name").value = tarea.nombre;
    document.getElementById("description").value = tarea.descripcion;
    document.getElementById("date").value = tarea.fecha;
    document.getElementById("time").value = tarea.hora;

    if (tarea.estado == true) {
        radioCompleta.checked = true;
    } else if (tarea.estado == false) {
        radioIncompleta.checked = true;
    }
}
function gestionarCambiosRadio() {
    const radioCompleta = document.getElementById('radio-completa');
    const radioIncompleta = document.getElementById('radio-incompleta');
    
    radioCompleta.addEventListener('change', function() {
        if (radioCompleta.checked) {
            radioIncompleta.checked = false; 
        }
    });

    radioIncompleta.addEventListener('change', function() {
        if (radioIncompleta.checked) {
            radioCompleta.checked = false; 
        }
    });
}
const formulario = document.getElementById('formulario');
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    guardarCambios();
});
function guardarCambios(){
    const tarea = tareas.find(tarea => tarea.id == tareaId)
    const nombre = document.getElementById("name").value
    const descripcion = document.getElementById("description").value
    const fecha = document.getElementById('date').value
    const hora = document.getElementById('time').value
    const radioCompleta = document.getElementById('radio-completa').checked;
    console.log(radioCompleta)
    if (radioCompleta){
        tarea.estado = true;
    } else {
        tarea.estado = false;
    }
    tarea.nombre = nombre;
    tarea.descripcion = descripcion;
    tarea.fecha = fecha;
    tarea.hora = hora;

    guardarTareasEnLocal()
}
function guardarTareasEnLocal() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}



function eliminarTarea(){

    for (let i = 0 ; i < tareas.length; i++){
        if(tareaId == tareas[i].id){
            tareas.splice(i,1)
        }
    }
    guardarTareasEnLocal()
    window.location.replace('../pages/VerTareas.html')
}

gestionarCambiosRadio();
pintarCampos();
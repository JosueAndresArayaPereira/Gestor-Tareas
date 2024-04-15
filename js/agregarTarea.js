function Tarea(nombre,fecha,hora,descripcion,estado){
    this.nombre = nombre||"";
    this.fecha = fecha||"";
    this.hora = hora||"";
    this.descripcion = descripcion||"";
    this.id = Date();
    this.estado = estado || false;
}
let tareas = [];

const formulario = document.getElementById('formulario');
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    AgregarTarea();
});

function AgregarTarea(){
    const nombre = document.getElementById("name").value;
    const fecha = document.getElementById("date").value;
    const hora = document.getElementById("time").value;
    const descripcion = document.getElementById("description").value;

    let tarea = new Tarea(nombre,fecha,hora,descripcion);
    tareas.push(tarea);
    guardarTareasEnLocal(tareas);
    window.location.reload
}
function cargarTareasDesdeLocal() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasGuardadas) {
      tareas = tareasGuardadas;
    }
}
function guardarTareasEnLocal(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

cargarTareasDesdeLocal();
console.log(tareas);

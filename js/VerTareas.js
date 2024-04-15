
let tareas = [];

const container = document.querySelector('.contenedorTareas');

function cargarTareasDesdeLocal() {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasGuardadas) {
      tareas = tareasGuardadas;
    }
}

function CargarTareas(){
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
    
        const newDiv = document.createElement('div');
        newDiv.className = 'tarea';
        newDiv.id= tarea.id;
    
        const title = document.createElement('h1');
        title.textContent = tarea.nombre;
        newDiv.appendChild(title);
    
        const description = document.createElement('p');
        description.textContent = tarea.descripcion;
        newDiv.appendChild(description);
    
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.value = tarea.fecha;
        dateInput.readOnly = true;
        newDiv.appendChild(dateInput);
    
        const timeInput = document.createElement('input');
        timeInput.type = 'time';
        timeInput.value = tarea.hora;
        timeInput.readOnly = true;
        newDiv.appendChild(timeInput);

        const state = document.createElement('p');
        let stateText = tarea.estado ? "Completada" : "Pendiente"
        let idEstado = tarea.estado ? "completadaTarea" : "pendienteTarea"
        state.id = idEstado;
        state.textContent = stateText ;
        newDiv.appendChild(state);
    
        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Detalles';
        detailsButton.addEventListener('click', function() {
            window.location.href = '../pages/Modificar.html?id=' + tarea.id;
        });
        newDiv.appendChild(detailsButton);
            
        container.appendChild(newDiv);
    }
}
cargarTareasDesdeLocal()
CargarTareas()
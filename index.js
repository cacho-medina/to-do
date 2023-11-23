const newTask = document.getElementById("newTask");
const ul = document.querySelector(".ul");
const listaTareas = [];

function agregarTarea() {
    const form = document.getElementById("form");
    form.classList.remove("d-none");
    form.setAttribute("class", "d-flex justify-content-between gap-3");
    newTask.classList.add("d-none");
}

function crearTarea(e) {
    e.preventDefault();
    let tarea = document.getElementById("tarea");
    const task = {
        nombre: tarea.value,
        completed: false,
    };
    const li = createLi(task);
    li.setAttribute(
        "class",
        "d-flex justify-content-between align-items-center"
    );
    ul.appendChild(li);

    tarea.value = "";
}

function createLi(task) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    p.innerText = task.nombre;
    li.appendChild(p);
    li.appendChild(checkbox);
    return li;
}

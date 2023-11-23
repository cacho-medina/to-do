const newTask = document.getElementById("newTask");
const ul = document.querySelector(".ul");
const listaTareas = [];

function agregarTarea() {
    const form = document.getElementById("form");
    form.classList.remove("d-none");
    form.setAttribute(
        "class",
        "d-flex flex-column flex-md-row justify-content-between gap-3"
    );
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
    li.setAttribute("class", "li text-center");
    ul.appendChild(li);
    tarea.value = "";
    li.addEventListener("click", () => {
        li.classList.toggle("red");
    });
}

function createLi(task) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = task.nombre;
    p.setAttribute("class", "m-0 overflow-auto");
    li.appendChild(p);
    return li;
}

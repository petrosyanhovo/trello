// SELECTORS
let modal = document.querySelector(".modal");
let modalInput = document.querySelector('.modal input[type="text"]');
let createTodoBtn = document.querySelector('.modal input[type="submit"]');
let closeModalBtn = document.querySelector(".modal .close");

let all_status = document.querySelectorAll(".status");
let openModalBtn = document.querySelector(".add_btn");

// EVENTS
openModalBtn.addEventListener("click", openModalFunc);
closeModalBtn.addEventListener("click", closeModalFunc);
createTodoBtn.addEventListener("click", createTodoFunc);

all_status.forEach((status) => {
    status.addEventListener("dragover", dragOverFunc);
    status.addEventListener("dragenter", dragEnterFunc);
    status.addEventListener("dragleave", dragLeaveFunc);
    status.addEventListener("drop", dragDropFunc);
    status.addEventListener("click", removeTodoFunc);
});

// FUNCTIONS
function openModalFunc() {
    modal.classList.add("active");
    modalInput.focus();
}

function closeModalFunc() {
    modal.classList.remove("active");
    modalInput.blur();
}

function createTodoFunc(e) {
    e.preventDefault();
    if (!modalInput.value.trim()) return;

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.setAttribute("draggable", "true");

    let span1 = document.createElement("span");
    span1.innerText = modalInput.value;

    let span2 = document.createElement("span");
    span2.classList.add("close");
    span2.innerText = "\u00D7";

    todoDiv.appendChild(span1);
    todoDiv.appendChild(span2);

    todoDiv.addEventListener("dragstart", dragStartFunc);
    todoDiv.addEventListener("dragend", dragEndFunc);

    all_status[0].appendChild(todoDiv);

    modalInput.value = "";
}

function removeTodoFunc(e) {
    if (e.target.classList[0] == "close") {
        e.target.parentElement.classList.add("fall");
        e.target.parentElement.addEventListener("transitionend", function () {
            e.target.parentElement.remove();
        });
    }
}

/// DRAGGABLE

// TODO BLOCK FUNCTIONS
let draggableTodo = null;

function dragStartFunc(e) {
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 100);
}

function dragEndFunc() {
    draggableTodo = null;
    this.style.display = "flex";
}

// STATUS BLOCK FUNCTIONS

function dragOverFunc(e) {
    e.preventDefault();
}

function dragEnterFunc() {
    this.style.border = "1px black solid";
}

function dragLeaveFunc() {
    this.style.border = "none";
}

function dragDropFunc() {
    this.appendChild(draggableTodo);
    this.style.border = "none";
}





[
    [0,1,2]
    [3,4,5]
    [6,7,8]
]

1 / 3
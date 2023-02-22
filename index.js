const addBtn = document.querySelector('#add');
const taskInput = document.querySelector('.form-task');
const taskList = document.querySelector('#task-list');

// addBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('event: ', event.target);

// });


addBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (taskInput.textContent === ""){
        return;
    }

    const newItem = document.querySelector('template').cloneNode(true).content;

    newItem.querySelector(".input").value = taskInput.value;
    newItem.querySelector(".item__delete").addEventListener("click", (event) => {
        const target = event.target.parentElement;
        target.remove();
    });

    taskList.append(newItem);
    taskInput.value = "";


    // const el = document.createElement('input'); // Создает новый HTML элемент
    // el.textContent = taskInput.value;
    // taskList.appendChild(el); // Добавляет элемент во внутрь
});

// taskList.addEventListener("click", (event) => {
//     let editText = ""
//     taskList.value = editText.textContent
//     editText.textContent = editText.value
// })


// button.addEventListener("click", function(event) {console.log(event)});


// ДЗ: Сделать так, чтобы пустые элементы не добавлялись. Сделать адаптив для проекта. Выложить проект на Github Pages.
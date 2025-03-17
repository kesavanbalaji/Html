const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
renderToDoList();
function renderToDoList() {
    let toDoListHtml = '';
    toDoList.forEach(function(toDoObject,i){
        // const {name} = toDoObject;
        const { name, dueDate } = toDoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            toDoList.splice(${i},1);
            renderToDoList();
            saveToStorage();" class="delete-todo-button">Delete</button>
        `;
        toDoListHtml += html;
    });
    document.querySelector('.js-todo-list').innerHTML = toDoListHtml;
}
function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    toDoList.push({
        // name: name,
        // dueDate: dueDate
        name, dueDate
    });
    inputElement.value = '';
    renderToDoList();
    saveToStorage();
}


function saveToStorage(){
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
}
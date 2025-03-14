const myArray = [];
function toDoList(){
    const inputElement = document.querySelector('.js-input-button');
    const name = inputElement.value;
    myArray.push(name);
    console.log(myArray);
    inputElement.value = '';
}
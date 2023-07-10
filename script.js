// Get references to HTML elements
const newItemInput = document.getElementById('newItem');
const todoList = document.getElementById('todoList');

// Function to add a new item to the list
function addItem() {
  const newItemText = newItemInput.value.trim();
  if (newItemText !== '') {
    const listItem = document.createElement('li');
    listItem.innerText = newItemText;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', deleteItem);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', editItem);

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    todoList.appendChild(listItem);

    newItemInput.value = '';
  }
}

// Function to delete an item from the list
function deleteItem(event) {
  const listItem = event.target.parentNode;
  todoList.removeChild(listItem);
}

// Function to edit an item in the list
function editItem(event) {
  const listItem = event.target.parentNode;
  const itemText = listItem.firstChild;
  const editText = prompt('Edit item:', itemText.innerText);
  if (editText !== null) {
    itemText.innerText = editText;
  }
}

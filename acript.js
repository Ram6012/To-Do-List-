document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');

    addButton.addEventListener('click', () => {
        const taskText = inputBox.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            listItem.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });
            listContainer.appendChild(listItem);
            inputBox.value = '';
        }
    });

    inputBox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});

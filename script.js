document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask (){
        const taskText = taskInput.value.trim();

        // Validate empty input
        if (taskText === ''){
            alert('Enter a new task')
            return;
        }

        // Task Creation and Removal
        const li = document.createElement('li');
        li.textContent = taskText;
        document.createButton()

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onclick = () => {
            taskList.removeChild(li)
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // clear task input
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    })

    addTask();


})
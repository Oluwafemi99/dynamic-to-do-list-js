document.addEventListener('DOMContentLoaded', function(){

    // Retrieve tasks from Local Storage or create an empty array

    loadTasks();

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask (taskText = null, save = true){
        const text = taskText || taskInput.value.trim();

        // Validate empty input
        if (test === ''){
            alert('Enter a new task')
            return;
        }

        // Task Creation and Removal
        const li = document.createElement('li');
        li.textContent = text;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Remove task when button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(li)
            removeTaskFromLocalStorage(text)
        };

        // Append button to the list item
        li.appendChild(removeButton);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Save to Local Storage

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(text);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // clear task input
        taskInput.value = '';
    }

    // Load tasks from Local Storage
    function loadTasks(){
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.array.forEach(taskText => (taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Remove task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
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
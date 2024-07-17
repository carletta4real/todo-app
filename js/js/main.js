document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the value of the input field
    const taskInput = document.getElementById('todo-input');
    const task = taskInput.value.trim();
    
    if (task) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = task;
        
        // Add the list item to the ul
        document.getElementById('todo-list').appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    }
});

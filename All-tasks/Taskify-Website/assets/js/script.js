document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.querySelector('.task-input');
    const addButton = document.querySelector('.add-button');
    const taskList = document.getElementById('task-list');
    const emptyState = document.querySelector('.empty-state');
    const totalTasksElement = document.getElementById('total-tasks');
    const completedTasksElement = document.getElementById('completed-tasks');

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    const updateStats = () => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;
        totalTasksElement.textContent = totalTasks;
        completedTasksElement.textContent = completedTasks;
    };

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateStats();
    };

    const createTaskCard = (task) => {
        const card = document.createElement('div');
        card.className = `task-card ${task.completed ? 'completed' : ''}`;
        card.setAttribute('data-id', task.id);
        
        const completeButton = document.createElement('button');
        completeButton.className = `complete-button ${task.completed ? 'checked' : ''}`;
        completeButton.setAttribute('aria-label', 'Toggle task completion');
        
        const text = document.createElement('span');
        text.className = 'task-text';
        text.textContent = task.text;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = '×';
        deleteButton.setAttribute('aria-label', 'Delete task');

        card.appendChild(completeButton);
        card.appendChild(text);
        card.appendChild(deleteButton);

        return card;
    };

    const updateEmptyState = () => {
        emptyState.style.display = tasks.length === 0 ? 'block' : 'none';
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        if (tasks.length === 0) {
            taskList.appendChild(emptyState);
        } else {
            tasks.forEach(task => {
                taskList.appendChild(createTaskCard(task));
            });
        }
        updateStats();
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            taskInput.classList.add('shake');
            setTimeout(() => taskInput.classList.remove('shake'), 300);
            return;
        }

        const newTask = {
            id: Date.now().toString(),
            text: taskText,
            completed: false
        };

        tasks.unshift(newTask);
        saveTasks();
        renderTasks();
        taskInput.value = '';
        taskInput.focus();
    };

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    taskList.addEventListener('click', (e) => {
        const taskCard = e.target.closest('.task-card');
        if (!taskCard) return;

        const taskId = taskCard.getAttribute('data-id');
        const taskIndex = tasks.findIndex(t => t.id === taskId);

        if (e.target.classList.contains('complete-button')) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
            saveTasks();
            renderTasks();
        }

        if (e.target.classList.contains('delete-button')) {
            taskCard.classList.add('removing');
            setTimeout(() => {
                tasks = tasks.filter(t => t.id !== taskId);
                saveTasks();
                renderTasks();
            }, 300);
        }
    });

    // Initial render
    renderTasks();
    taskInput.focus();
});
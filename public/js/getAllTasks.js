const getAllTasks = async () => {
    try {
        const { data } = await axios.get('/tasks');
        return data;
    } catch (err) {
        console.error(err);
    }
};

getAllTasks();

const renderTasks = async () => {
    const tasks = await getAllTasks();
    const taskList = document.querySelector('.box div');
    taskList.textContent = '';
    tasks.forEach((task) => {
        // create the outer div
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        // create the checkbox input
        const checkboxInput = document.createElement('input');
        checkboxInput.classList.add('doneBtn');
        checkboxInput.type = 'checkbox';
        checkboxInput.name = 'checkbox';
        checkboxInput.value = task._id;

        checkboxInput.addEventListener('click', async (e) => {
            e.preventDefault();
            const taskId = e.target.value;
            await deleteTask(taskId);
            renderTasks();
        });

        // create the paragraph element
        const paragraph = document.createElement('p');
        paragraph.textContent = task.content;

        // append the checkbox and paragraph elements to the outer div
        itemDiv.appendChild(checkboxInput);
        itemDiv.appendChild(paragraph);

        // add the outer div to the taskList element
        taskList.appendChild(itemDiv);
    });
};

renderTasks();

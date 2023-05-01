const addBtn = document.querySelector('.addBtn');

const addTask = async (content) => {
    try {
        const { data } = await axios.post('/create', { content });
        return data;
    } catch (err) {
        console.error(err);
    }
};

addBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const content = document.querySelector('.taskInput').value;
    await addTask(content);
    renderTasks();
});

const { Task } = require('../models/task');
const path = require('path');

const getAllTasksController = (req, res) => {
    Task.find()
        .then((tasks) => {
            res.json(tasks);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const createTaskController = (req, res) => {
    const { content } = req.body;
    const task = new Task({ content });
    task.save()
        .then((task) => {
            res.status(201).json('Task created successfully');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const deleteTaskController = (req, res) => {
    const { taskId } = req.params;
    console.log(taskId);
    Task.findByIdAndDelete(taskId)
        .then(() => {
            res.status(200).json('Task deleted successfully');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

const pageViewController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
};

module.exports = {
    getAllTasksController,
    createTaskController,
    pageViewController,
    deleteTaskController,
};

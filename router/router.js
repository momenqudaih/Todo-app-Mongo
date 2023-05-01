// eslint-disable-next-line new-cap
const router = require('express').Router();
const {
    pageViewController,
    createTaskController,
    deleteTaskController,
    getAllTasksController,
} = require('../controllers');

router.get('/', pageViewController);
router.get('/tasks', getAllTasksController);
router.post('/create', createTaskController);
router.get('/delete/:taskId', deleteTaskController);

module.exports = { router };

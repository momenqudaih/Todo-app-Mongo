const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 3,
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://Vishwa:%4028vis02J@cluster0.qa2jnoq.mongodb.net/full-stack-todo-app"
);

const TodoSchema = new mongoose.Schema({
    id: String,
    task: String,
    timeDuration: String,
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
    Todos
}
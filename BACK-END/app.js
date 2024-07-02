const express = require("express")
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');
const { createTodo } = require("./ZOD/zodValidation")
const { Todos } = require("./DB/mongoDB")

const app = express()

app.use(express.json())
app.use(cors())
const id = uuidv4();

app.post("/todos", async (req, res) => {

    const { task, timeDuration } = req.body

    const zodValiadtion = createTodo.safeParse({
        task: task,
        timeDuration: timeDuration
    })
    console.log(zodValiadtion.success)
    if (zodValiadtion.success) {
        const addTodo = await Todos.create({
            id: id,
            task: task,
            timeDuration: timeDuration
        })
        if (addTodo) {
            res.status(200).json({
                message: "New Todo Added"
            })
        } else {
            res.status(500).json({
                message: "New Todo Failed To Add. Try Again Later"
            })
        }
    } else {
        res.status(411).json({
            message: "Inputs are Invalid"
        })
    }
})


app.get("/todos", async (req, res) => {
    const allTodos = await Todos.find({})
    if (allTodos) {
        res.status(200).json({
            allTodos: allTodos
        })
    } else {
        res.status(500).json({
            message: "There is No Todo's"
        })
    }
})

app.listen(5000)
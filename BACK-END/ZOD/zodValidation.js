const z = require("zod")

const createTodo = z.object({

    task: z.string().min(3),
    timeDuration: z.string(),

})

module.exports = {
    createTodo: createTodo
}
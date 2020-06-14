require('../src/db/mongoos')

const Task = require('../src/models/task')

// Task.findByIdAndRemove('5ee47deb06c1b33888fc5a42').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateTaskAndCount = async (id) => {
    const task = Task.findByIdAndRemove(id)
    const count = task.countDocuments({completed: false})
    return count
}

updateTaskAndCount('5ee47deb06c1b33888fc5a42').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})
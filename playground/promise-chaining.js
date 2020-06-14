require('../src/db/mongoos')
const User = require('../src/models/user')
// 5ee432aa9fb9d21a5084a9e8

// User.findByIdAndUpdate('5ee432aa9fb9d21a5084a9e8', {
//     age:1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})

    return count
}

updateAgeAndCount('5ee432aa9fb9d21a5084a9e8', 2).then((count) => {
    console.log(count)
}).catch((err) => console.log(err))
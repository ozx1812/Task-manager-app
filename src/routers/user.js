const express = require('express')
const User = require('../models/user')

const router = new express.Router()

// users routes

router.post('/users', async (req,res) => {
    const user = new User(req.body)
    // const user = new User({
    //     name: "omij",
    //     email: "ads@fa.com",
    //     password: "d"
    // })

    try {
        await user.save()
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
    
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((err) => {
    //     res.status(400).send(err)
    // })

    // res.send('testing')
})



router.get('/users', async (req, res) => {
    
    try {
        const users = await User.find({})
        res.send(users)
    }catch (err) {
        res.status(500).send()
    }
    
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((err) => {
    //     res.status(500).send()
    // })
})

router.get('/users/:id',async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
            
    } catch (err) {
        res.status(500).send()
    }
    // const _id = req.params.id
    // User.findById(_id).then((user) => {
    //     if(!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user)

    // }).catch((err) => {
    //     res.status(500).send()
    // })
})

router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOps = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOps) {
        return res.status(400).send({ error: 'Invalid update'})
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(err) {
        // 2 types - validation or internal server
        res.status(400).send(err)
    }
})

// router.delete('/users:id', async (req, res) => {
//     const _id = req.params.id
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)
//         if(!user) {
//             return res.status(404).send()   
//         }
//         res.send(user)
//     } catch (err) {
//         res.status(500).send()
//     }
// })

router.delete('/users:id', async (req, res) => {
    try {
        const user = await User.findOneAndDelete(req.params.id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(err) {
        res.status(500).send()
    }
})

module.exports = router

const express = require('express')
const Task = require('../models/task')

const router = new express.Router()


// task routes


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (err) {
        res.status(400).send(err)
    }

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((err) => {
    //     res.status(400).send(err)
    // })
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (err) {
        res.status(500).send()
    }
    
    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((err) => {
    //     res.status(500).send()
    // })
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (err) {
        res.status(500).send()
    }

    // Task.findById(_id).then((task) => {
    //     if(!task) {
    //         return res.status(400).send()
    //     }
    //     res.send(task)
    // }).catch((err) => {
    //     res.status(400).send()
    // })
})

router.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOps = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOps) {
        return res.status(400).send({ error: 'Invalid update'})
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (err) {
        res.status(400).send()
    }
    
})

router.delete('/tasks:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) {
            return res.status(404).send()   
        }
        res.send(task)
    } catch (err) {
        res.status(500).send()
    }
})


module.exports = router
// CRUD operations

// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;

// const ObjectID = mongodb.ObjectID;

// const {MongoClient, ObjectID} = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);

// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!');
//     } 
//     console.log('connection established!');
//     const db = client.db(databaseName);
//     //
//     // D - delete
//     //

//     db.collection('users').deleteMany({
//         age: 21
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => console.log(error))

    //
    // U - update
    //
    
    // const upadtepromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5eddd2c040c1e73274ec44fc")
    // }, {
    //     $inc: {
    //         age: 1   
    //     }
    // })

    // upadtepromise.then((result) => {
    //     console.log(result)
    // }).catch((err) => console.log(err))

    // const updatePromise = db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => console.log(error))
    
    //
    // R - Read
    //

    // db.collection('users').findOne({name:'omij', age:0}, (err, usr) => {

    //     if (err) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(usr)
    // })

    //
    // C - create
    //

    // db.collection('users').insertOne({
    //     name: 'omij',
    //     age: 20
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!');
    //     } 
    //     console.log(result.ops);

    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'omij',
    //         age: 20
    //     },
    //     {
    //         name: 'ozx',
    //         age: 21
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert user!');
    //         } 
    //         console.log(result.ops);
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Lesson 5 - objects and array',
    //         completed: false
    //     },
    //     {
    //         description: 'Lesson 6 - inheritance',
    //         completed: true
    //     },
    //     {
    //         description: 'Lesson 7 - polymorphism',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to inserat tasks!');
    //     }
    //     console.log(result.ops);
    // })

// })
// CRUD create read update delete

// const mongodb = require('mongodb') // mongodb driver 
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }
   console.log('connected correctly!')

    const db = client.db(databaseName) //creates or select the mentioned database
    
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Prasad',
    //     age: 23
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log (result.ops)// array of docs
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: "Gunther",
    //         age: 30
    //     }

    // ], (error, result)=>{
    //     if(error){
    //         return console.log("Unable to insert !")
    //     }

    //     console.log(result.ops)
    // })
 
    // to insert we use insertOne , insertMany () --- takes 2 parameter 1. array/ data 2. callback function (error, result)
    // db.collection('task').insertMany([
    //     {
    //         description :'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: "Renew inspection",
    //         completed: false
    //     },
    //     {
    //         description: 'Water plants',
    //         completed: false
    //     }
    // ], (error, result)=>{
    //     if(error){
    //        return console.log('unable to insert')
    //     }

    //     console.log(result.insertedIds)
    // })


    //-----------------Reading data from MongoDB
    
    // In Mongodb we have Ids call Gid- global ids
//     db.collection('users').findOne({_id: new ObjectID('619b69b5a1d1c4d02966876a') },(error, user)=>{
//         if(error){
//             return 
//             console.log("unablt to read")
//         }
//         console.log(user);
//    })

    // db.collection('task').findOne({_id: new ObjectID('619b54fb9bd83beca0a09392')}, (error, result)=>{
    //     if(error){
    //         return console.log("Unable to read data!")
    //     }
    //     console.log(result)
    // })
    

    // db.collection('task').find({completed: false}).toArray((error, tasks)=>{
    //     console.log(tasks)
    // })


    //------------Update -----------------
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("619b46a778938ceaefa8b840")
    // }, {
    //     $inc:{
    //         age: 1
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error)
    // })


    //----Update Many ----
    // const updatePromise = db.collection('task').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed : true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    

    //=======deleteOne=====
    // const deleteOnePromise = db.collection('users').deleteMany({
    //     age: 23
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    //-------deleteOne---
    // const deleteOnePromise = db.collection('task').deleteOne({
    //     description : 'Renew inspection' 
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


})


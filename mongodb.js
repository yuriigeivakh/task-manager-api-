const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://root:example@127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to DB!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 44
    // })
    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })
    // db.collection('tasks').deleteOne({
    //     description: 'Clean',
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
const dbString = 'mongodb://0.0.0.0:27017/';
mongoose.set('strictQuery', true);
const faq = new mongoose.Schema({
    Question: String,
    Answer: String
});
let FAQ;

app.post('/createDb', (req,res)=>{
    let dbName = req.body.database;
    let collection = req.body.collection;
    mongoose.connect(dbString+dbName);
    FAQ = mongoose.model(collection, faq);
})

const db = mongoose.connection;
db.on('error', (err) => {console.log(err);});

db.once('open', ()=>{})
app.post('/insert',(req,res)=>{
    FAQ.create(req.body).then(
        result => {
            res.send({"message": 'Record added'});
            },
            err => { res.send(err.message); } )
            .catch( err => { console.log(err); } );
})
app.get('/deleteAll',(req,res)=>{
    FAQ.deleteMany({}).then(result => {
        res.send({"message": 'DB Erased'});
        },
        err => { res.send(err.message); } )
        .catch( err => { console.log(err); } );
})
app.get('/findAll',(req,res)=>{
    FAQ.find({}).then(result => {
        res.send(result);
        },
        err => { res.send(err.message); } )
        .catch( err => { console.log(err); } );
})
app.post('/find',(req,res)=>{
    FAQ.findOne(req.body).then(
        result => {
            res.send(result);
            },
            err => { res.send(err.message); } )
            .catch( err => { console.log(err); } );
})
app.post('/deleteOne',(req,res)=>{
    FAQ.deleteOne(req.body).then(result => {
        res.send({"message": 'Record deleted'});
        },
        err => { res.send(err.message); } )
        .catch( err => { console.log(err); } );
})
app.post('/update',(req,res)=>{
    let condition = req.body.condition;
    let updated = req.body.update;
    FAQ.updateOne(condition, updated).then(
        result => {
            res.send({"message": 'Record updated'});
            },
            err => { res.send(err.message); } )
            .catch( err => { console.log(err); } );
    })

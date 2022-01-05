import express from "express";
import mongoose from "mongoose"
import Cards from './models/dbCards.js'
import Cors from 'cors'

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://randybowers:Randyb21@cluster0.6zbni.mongodb.net/tinderdb?retryWrites=true&w=majority`


//Middlewares
app.use(express.json());
app.use(Cors())

//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//api endpoints
app.get('/', (req, res) =>{
    res.status(200).send('Hello World')
})

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req,res) =>{
    Cards.find((err, data) =>{
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//listener
app.listen(port, () =>{
    console.log(`Listening on localhost ${port}`)
})
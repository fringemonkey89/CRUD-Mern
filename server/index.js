const express = require('express')
const mongoose = require('mongoose')
const app = express()

const FoodModel = require('./models/Food.js')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('debug', true )

app.get('/', async (req, res) => {
    const food = new FoodModel({foodName: "apple", daysSinceIAte: 3})
    try{

        await food.save()
    }
  
    catch(err){
        console.log(err)
    }
})
app.listen(3001, () => {
    console.log('server running on port 3001')
})
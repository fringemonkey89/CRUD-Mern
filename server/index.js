const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()


const FoodModel = require('./models/Food.js')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('debug', true )



app.post('/insert', async (req, res) => {
    
    const foodName = req.body.foodName
    
    const days = req.body.days

    const food = new FoodModel({foodName: foodName, daysSinceIAte: days})
    try{

        await food.save()
        res.send('inserted data')
    }
  
    catch(err){
        console.log(err)
    }
})

app.get('/read', async (req, res) => {
    
   
    try{
        const foodData = await FoodModel.find({})
        res.send(foodData)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'something happened'})
    }
    
})
app.listen(3001, () => {
    console.log('server running on port 3000')
})
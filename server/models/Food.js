const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    daysSinceIAte: {
        type: Number,
        require: true
    }
})

const Food = mongoose.model("Food", FoodSchema)

module.exports = Food;
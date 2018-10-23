// require mongoose
const mongoose = require('../db/connections')
// declare Schema
const Schema = mongoose.Schema

// Schema is a like a blueprint telling the program what to expect 
const Store = new Schema({
    name: String,
    location: String,
    hours: String,
    products: [
        // array of objects 
        
        {
            type: Schema.Types.ObjectId,
            // type of schema that exists in mongoDM that is a class
            ref: 'Product'
            // tells us what the class is
        }
    ]
})

module.exports = mongoose.model('Store', Store)
// require mongoose
const mongoose = require('../db/connections')
// declare Schema
const Schema = mongoose.Schema

// Schema is a like a blueprint
const Store = new Schema({
    name: String,
    location: String,
    hours: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

module.exports = mongoose.model('Store', Store)
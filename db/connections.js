const mongoose = require('mongoose')

// when you call mongoose.connect it will set up a connection with the database
mongoose.connect('mongodb://localhost/gocery-store')


mongoose.connection.once('open' , () =>{
    console.log(`Mongoose has connected to MongoDB`)
})

module.exports = mongoose
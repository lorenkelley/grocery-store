//1. bring in express
const express = require('express')
// 2. invoke express to get access to express
const app = express()
// 3. routes
const routes = require('./routes/index')

// 4.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes)
app.set('view engine', 'hbs')

// 5.  make sure the port is listening to port 3000 
const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

const Store = require('../models/Store.js')
const Product = require('../models/Product.js')
const mongoose = require('./connections')


// defining variables that are new instances of a class
const laptop = new Product({
    // pass in two key value pairs
    name: "Macbook Pro",
    price: 2500,
})

const shampoo = new Product({
    name: "Shampoo",
    price: 5,
})

const bread = new Product({
    name: "Bread",
    price: 2.50,
})

const couch = new Product({
    name: "Leather Couch",
    price: 500,
})

const television = new Product({
    name: "BIG TV",
    price: 800,
})

const baseballBat = new Product({
    name: "Baseball Bat",
    price: 15,
})

const uno = new Product({
    name: "Uno Card Game",
    price: 10,
})

// new instances of Store from our models folder
const kroger = new Store({
    name: "Kroger",
    location: "Edgewood Shopping Center",
    hours: "Open 24hrs",
    // the products that we defined 
    products: [bread, shampoo]
})
const target = new Store({
    name: "Target",
    location: "Edgewood Shopping Center",
    hours: "10am - 11pm Everyday of the week",
    products: [television, uno, laptop]
})

const walmart = new Store({
    name: "Walmart",
    location: "East Atlanta",
    hours: "Open 24 hrs",
    products: [couch, baseballBat]
})

// reseed data
Store.remove({})
// inserts products into kroger, target, etc..
    .then(() => Product.insertMany([laptop, shampoo, bread, couch, television, baseballBat, uno]))
    .then(() => kroger.save())
    .then(() => target.save())
    .then(() => walmart.save())
    .then(() => console.log("Database seeded success"))
    // to close out seed.js
    .then(() => mongoose.connection.close())
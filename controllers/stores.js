const Store = require('../models/Store')

const storesController = {
index:(req, res) => {
    Store.find().populate('products')
    // pull products inside a of store using .populate
    .then(stores => {
        res.render('stores/index',{
        // res.render relates to handlebars (hbs)
            stores: stores
        })
    })
}
}

module.exports = storesController

const Store = require('../models/Store')

const storesController = {
    index: (req, res) => {
        Store.find({}).populate('products')
            .then((stores) => {
                res.render('stores/index', {
                    stores: stores

                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is new route on stores")
    },
    show: (req, res) => {
        const storeId = req.params.storesId
        Store.findById(storeId)
            .then((store) => {
                res.send(store)
            })
    }
}

module.exports = storesController
const route = require('express').Router()

route.get('/', (req, res) => {
    res.status(200).json({
        message: "Organify"
    })
})

const userRoutes = require('./user')
const jobRoutes = require('./job')

route.use('/users', userRoutes)
route.use('/jobs', jobRoutes)

module.exports = route
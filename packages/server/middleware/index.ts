const express = require('express')
const morgan = require('morgan')
const cors = require('cors')






const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json(),
    cors(),

]

module.exports = (app) => {
    middleware.forEach(m => {
        app.use(m)
    })
}
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const dinnerRouter = require('./dinner/dinnerRouters')
const fridgeRouter = require('./fridge/fridgeRouters')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.use('/api/dinners', dinnerRouter)
server.use('/api/fridge', fridgeRouter)

module.exports = server
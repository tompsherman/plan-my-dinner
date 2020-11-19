
const express=require('express')
const fs = require('fs')
const cors = require('cors')

const { generate } = require('shortid')
require('colors')

const server = express ()

server.use(express.json())
server.use(cors())

const PORT = 9999

server.get('/', (req,res)=>{
    res.status(202).json({message: "server is live"})
})

server.get('/fridge', (req,res)=>{
    res.status(202).json(fridge)
})

server.post('/fridge', (req,res)=>{
    const nextFood = {id: generate(), ...req.body}
    fridge.push(nextFood)
    res.status(202).json(fridge)
})

server.get('/past-dinners', (req,res)=>{
    res.status(202).json(pastDinner)
})

server.post('/past-dinners', (req,res)=>{
    const lastDinner = {id: generate(), ...req.body}
    pastDinner.push(lastDinner)
    res.status(202).json(pastDinner)
})

server.listen(PORT, ()=> {
    console.log(`\n*** listening on PORT ${PORT} ***`.bgWhite.gray)
})
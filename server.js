
const express=require('express')
const fs = require('fs')
const cors = require('cors')

const { generate } = require('shortid')
require('colors')

const server = express ()

server.use(express.json())
server.use(cors())

const PORT = 9999

let fridge = [
    {
        id: generate(), 
        food: "broccoli",
        amount: "full"
    },
    {
        id: generate(), 
        food: "chicken",
        amount: "half"
    },
]

let pastDinner = [
    {
        id: generate(),
        mainCourse: "chicken stir fry",
        ingredient1: "chicken",
        ingredient2: "rice",
        sideDish: "beet kale salad",
        ingredient3: "kale",
        ingredient4: "beets",
        rating: 3.5
    },
    {
        id: generate(),
        mainCourse: "salmon",
        ingredient1: "salmon",
        ingredient2: "mustard sauce",
        sideDish: "lentil salad",
        ingredient3: "lentils",
        ingredient4: "pepper",
        rating: 5
    }
]

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
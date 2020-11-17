const router = require('express').Router()

const Fridge = require('./fridgeModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the fridge router is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    Fridge.find()
    .then(fridge => {
        res.status(200).json(fridge)
    })
    .catch(error => 
        res.status(500)
        .json({error: error.message, extra: error.stack})
    )
 })

router.post('/', (req,res)=>{
    const fridgeData = req.body 
    Fridge.create(fridgeData)
    .then(food => {
        res.status(201).json(food)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })
module.exports = router
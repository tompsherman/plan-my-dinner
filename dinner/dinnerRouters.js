const router = require('express').Router()

const Dinners = require('./dinnerModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the dinner router is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    Dinners.find()
    .then(dinners => {
        res.status(200).json(dinners)
    })
    .catch(error => 
        res.status(500)
        .json({message: `${error.message}; ${error.stack}`}))
 })

 router.post('/', (req,res)=>{ 
     const dinnerData = req.body
     Dinners.create(dinnerData)
     .then(dinner => res.status(201).json(dinner))
     .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
  })

module.exports = router
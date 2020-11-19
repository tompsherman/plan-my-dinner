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

 router.get('/:id', (req,res)=>{ 
     Dinners.findById(id)
     .then(dinner => {
        if(dinner){
            res.status(200).json(dinner)
        } else {
            res.status(404).json({ message:`cannot find dinner #${id}`})
        }    })
    .catch(error => res.status(500).json({message: error.message, extra: error.stack}))
 })


 router.post('/past', (req,res)=>{ 
     const dinnerData = req.body
    console.log("dinnerdata:", req.body) 
     Dinners.create(dinnerData)
     .then(dinner => res.status(201).json(dinner))
     .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
  })

  router.put('/:id', (req,res)=>{ 
    const {id} = req.params
    const changes = req.body

    Dinners.findById(id)
    .then(dinner =>{
        if(dinner){
            return Dinners.update(id, changes)
        } else {
            res.status(404).json({ message: `could not find dinner #${id}`})
        }
    }).then(updatedDinner => {
        res.json(updatedDinner)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))

 })

 router.delete('/:id', (req,res)=>{ 
    const {id} = req.params

    Dinners.throwOut(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: `dinner #${id} does not exist in the database`})
        }
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
    
 }) 

module.exports = router
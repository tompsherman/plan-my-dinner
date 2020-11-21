const router = require('express').Router()

const Sides = require('./sidesModels')

const currentTime = new Date().toDateString()

// @desc		Test end is working
// @route		GET /test
router.get('/test', (req, res) => {
    res.status(202).json({message: 'the side router is running at ' + currentTime})
})

router.get('/', (req,res)=>{ 
    Sides.find()
    .then(sides => {
        res.status(200).json(sides)
    })
    .catch(error => 
        res.status(500)
        .json({message: `${error.message}; ${error.stack}`}))
 })

 router.get('/:id', (req,res)=>{ 
     Sides.findById(id)
     .then(side => {
        if(side){
            res.status(200).json(side)
        } else {
            res.status(404).json({ message:`cannot find side #${id}`})
        }    })
    .catch(error => res.status(500).json({message: error.message, extra: error.stack}))
 })


 router.post('/past', (req,res)=>{ 
     const sideData = req.body
    console.log("sidedata:", req.body) 
     Sides.create(sideData)
     .then(side => res.status(201).json(side))
     .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
  })

  router.put('/:id', (req,res)=>{ 
    const {id} = req.params
    const changes = req.body

    Sides.findById(id)
    .then(side =>{
        if(side){
            return Sides.update(id, changes)
        } else {
            res.status(404).json({ message: `could not find side #${id}`})
        }
    }).then(updatedSide => {
        res.json(updatedSide)
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))

 })

 router.delete('/:id', (req,res)=>{ 
    const {id} = req.params

    Sides.throwOut(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: `side #${id} does not exist in the database`})
        }
    })
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
    
 }) 

module.exports = router
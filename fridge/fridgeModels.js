const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
    findBy,
    findById,
    create,
    update,
    throwOut
}

    //functions:
    function find(){
        return db('fridge')
    }

    function findBy(filter){
        return db('fridge').where(filter).first()
    }

    function findById(id){
        return db('fridge').where({id}).first()
    }

    async function create(food){
        const [id] = await
        db('fridge').insert(food)
            return db('fridge').where({id}).first()
    }

    async function update(id){
        return db('fridge').where({id}).first()
    }

    async function throwOut(id){
        return db('fridge').where({id}).first()
    }
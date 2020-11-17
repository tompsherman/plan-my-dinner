const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
    create,
}

    //functions:
    function find(){
        return db('fridge')
    }
    async function create(food){
        const [id] = await
        db('fridge').insert(food)
            return db('fridge').where({id}).first()
    }
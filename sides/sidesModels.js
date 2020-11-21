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
        return db('sides')
    }
    function findBy(filter){
        return db('sides').where(filter).orderBy('id')
    }
    function findById(id){
        return db('sides').where({id}).first
    }
    async function create(side){
        const [id] = await
        db('sides').insert(side)
            return db('sides').where({id}).first()
    }
    async function update(id, changes){
        const count = await db('sides').where({id}).update(changes)
        if(count) {
            return db('sides').where({id}).first()
        } else {
            return Promise.resolve(null)
        }
    }
    async function throwOut(id) {
        const side = await db('sides').where({id}).first()
        if(!side) {
            return Promise.resolve(null)
        } else {
            await db('sides')
            .where({id})
            .del() 
            return Promise.resolve(side)
        }
    }
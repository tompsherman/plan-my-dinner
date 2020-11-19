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
        return db('dinners')
    }
    function findBy(filter){
        return db('dinners').where(filter).orderBy('id')
    }
    function findById(id){
        return db('dinners').where({id}).first
    }
    async function create(dinner){
        const [id] = await
        db('dinners').insert(dinner)
            return db('dinners').where({id}).first()
    }
    async function update(id, changes){
        const count = await db('dinners').where({id}).update(changes)
        if(count) {
            return db('dinners').where({id}).first()
        } else {
            return Promise.resolve(null)
        }
    }
    async function throwOut(id) {
        const dinner = await db('dinners').where({id}).first()
        if(!dinner) {
            return Promise.resolve(null)
        } else {
            await db('dinners')
            .where({id})
            .del() 
            return Promise.resolve(dinner)
        }
    }
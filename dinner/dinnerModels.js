const db = require('../data/db-config')

module.exports = {
    //function names:
    find,
    create
}

    //functions:
    function find(){
        return db('dinners')
    }
    async function create(dinner){
        const [id] = await
        db('dinners').insert(dinner)
            return db('dinners').where({id}).first()
    }
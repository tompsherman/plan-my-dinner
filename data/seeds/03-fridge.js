
exports.seed = function(knex) {
      return knex('fridge').insert([
        {id: 1, food: 'broccoli', amount: 1},
        {id: 2, food: 'chicken', amount: .5},
        {id: 3, food: 'beets', amount: .5},
        {id: 4, food: 'collieflower', amount: 1},
        {id: 5, food: 'turkey sausage', amount: .75},
      ]);
};

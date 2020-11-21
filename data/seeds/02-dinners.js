
exports.seed = function(knex) {
  return knex('dinners').insert([
    {id: 1, mainCourse: 'chikky stir fry', ingredient1: 'chicken', ingredient2: 'rice'},
    {id: 2, mainCourse: 'maple-glazed salmon', ingredient1: 'salmon', ingredient2: 'maple syrup'},
    {id: 3, mainCourse: 'kale + collieflower soup', ingredient1: 'collieflower', ingredient2: 'turkey sausage'},
  ]);
};

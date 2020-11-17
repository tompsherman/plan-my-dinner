
exports.seed = function(knex) {
      return knex('dinners').insert([
        {id: 1, mainCourse: 'chikky stir fry', ingredient1: 'chicken', ingredient2: 'rice', sideDish: 'beet kale salad', ingredient3: 'beets', ingredient4: 'kale'},
        {id: 2, mainCourse: 'maple-glazed salmon', ingredient1: 'salmon', ingredient2: 'maple syrup', sideDish: 'lentil salad', ingredient3: 'lentils', ingredient4: 'bell pepper'},
        {id: 3, mainCourse: 'kale + collieflower soup', ingredient1: 'collieflower', ingredient2: 'turkey sausage', sideDish: 'bread', ingredient3: 'bread', ingredient4: 'butter'},
      ]);
};


exports.seed = function(knex) {
  return knex('sides').insert([
    {id: 1, sideDish: 'beet kale salad', ingredient3: 'beets', ingredient4: 'kale'},
    {id: 2, sideDish: 'lentil salad', ingredient3: 'lentils', ingredient4: 'bell pepper'},
    {id: 3, sideDish: 'bread', ingredient3: 'bread', ingredient4: 'butter'},
  ]);
};

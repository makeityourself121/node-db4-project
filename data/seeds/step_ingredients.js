exports.seed = function (knex) {
  return knex('step_ingredients').insert([
    { ingredient_name: 'olive oil' },
    { ingredient_name: 'chopped tomato' },
    { ingredient_name: 'black pepper' },
    { ingredient_name: 'ginger' },
  ])
}

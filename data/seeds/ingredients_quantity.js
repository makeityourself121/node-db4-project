exports.seed = function (knex) {
  // we are not trucating here anymore
  return knex('ingredients_quantity').insert([
    { quantity: 0.05, ingredient_id: 1, step_id: 2 },
    { quantity: 0.12, ingredient_id: 3, step_id: 1 },
    { quantity: 0.03, ingredient_id: 2, step_id: 3 },
    { quantity: 0.23, ingredient_id: 4, step_id: 4 },
  ])
}

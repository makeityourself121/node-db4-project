exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'fried noodle' },
    { recipe_name: 'homemade pizza' },
  ])
}

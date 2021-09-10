exports.seed = function (knex) {
  return knex('recipe_steps').insert([
    {
      step_num: 1,
      step_instructions: 'Put a large saucepan on a medium heat',
      recipe_id: 1,
    },
    {
      step_num: 2,
      step_instructions: 'Add 1 tbsp olive oil',
      recipe_id: 1,
    },
    {
      step_num: 3,
      step_instructions: 'Add 1 cup chopped tomatoes ',
      recipe_id: 1,
    },
    {
      step_num: 1,
      step_instructions: 'do whatever you like to do',
      recipe_id: 2,
    },
    {
      step_num: 2,
      step_instructions: 'i do not care now  ',
      recipe_id: 2,
    },
  ])
}

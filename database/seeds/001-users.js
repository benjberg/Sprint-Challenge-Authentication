
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'benny2', password:'newpass'},
        {username: 'benny', password: 'pass'},
        {username:'the jets', password: 'benny,benny'}
      ]);
    });
};

/* eslint-disable */

/**
 * 1. create custom user
 * 2. create collection (Before MongoDB can save your new database, a collection name must also be specified at the time of creation.)
 */
db.createUser({
  user: 'vue_club_dev',
  pwd: 'vue_club_dev',
  roles: [
    {
      role: 'readWrite',
      db: 'vue_club_dev'
    }
  ]
})

db.vue_club_dev.insert({
  vue_club_dev: 'vue_club_dev'
})

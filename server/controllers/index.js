var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { select users.name, rooms.name, messages.message from messages inner join rooms on rooms.id = messages.room_id inner join users on users.id = messages.user_id}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get('/messages', (err, messages) => {
        if (err) {
          res.send(err);
        } else {
          res.send(messages);
        }
      });
    },

    post: function (req, res) {

      let message = req.body;
      models.messages.post('/messages', message, (err, messages) => {
        if (err) {
          res.send(err);
        } else {
          res.send(messages);
        }
      });
    }
  },



  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get('/users', (err, users) => {
        if (err) {
          res.send(err);
        } else {
          res.send(users);
        }
      });
    },
    post: function (req, res) {
      let message = {
        username: '2',
        roomname: '2',
        message: 'This is a test from mock data'
      };

      models.users.post('/users', username, (err, users) => {
        if (err) {
          res.send(err);
        } else {
          res.send(/* messages  */);
        }
      });
    }
  }
};


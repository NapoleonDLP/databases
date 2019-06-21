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

      let message = {
        username: '1',
        roomname: '1',
        message: 'This is a test from mock data'
      };

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

    },
    post: function (req, res) {}
  }
};


var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //handle req dispatch to models => models => database

      //pass in req body = message coming from client?
      //messages {
      //username
      //roomname
      //message
      //}
      console.log('****************');
      console.log(req);

      models.messages.get('/messages', (err, messages) =>{

        //checks if there is an error coming from models
        if (err) {
          //sends error code
          res.send(err);
        } else {
          //if messages comes back are written in response
          res.send(messages);
          //res.json(messages)
          // res.status()

        }
      });
      // }
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },



  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (route, callback) {

      //query database

      // let conStr = 'select users.name, rooms.name, messages.message \ from messages inner join rooms on rooms.id = messages.room_id \ inner join users on users.id = messages.user_id';

      let conStr = 'select messages.message from messages';
      // console.log('**************');
      // console.log(conStr);
      //our problem is here. It does not recognize the .query

      //error code was not recognizing db.connection.query()

      db.query (conStr, function(err, result) {
        if (err) {
          callback(err, null);
        } else {
          //result coming back as an empty array
          // console.log('******result*****');
          // console.log(result);
          callback(null, result);
        }
      });
    },
    post: function (route, params, callback) {
      console.log('**************');
      console.log(params);
      let conStr = 'insert into messages (user_id ,room_id, message) VALUES (?,?,?)';

      db.query (conStr, [params.username, params.roomname, params.message], function(err, result) {
        if (err) {
          callback(err, null);
        } else {
          //result coming back as an empty array
          console.log('******result*****');
          console.log(result);
          callback(null, result);
        }
      });

    } // a function which can be used to insert a message into the database
  }, // a function which produces all the messages


  // },

  users: {
    // Ditto as above.
    get: function () {
    // let conStr = `SELECT EXISTS( SELECT 1 FROM users WHERE id = ${id})`;
    // db.query(conStr, function(error, result, field) {
    //   if (error) throw error;
      //  console.log(result[conStr]); //--> 1
      //});
    }
  },
  post: function () {}
};


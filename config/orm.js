var connection = require("../config/connection");

var orm = {
  selectAll: function (table, cb) {
    var dbQuery = "SELECT * FROM " + table + ";";

    connection.query(dbQuery, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
  insertOne: function(table, cols, vals, cb) {
      var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";

      console.log(dbQuery);
      connection.query(dbQuery, vals, function (err, res) {
        if (err) {
          throw err;
        }
        cb(res);
    });
 }
updateOne: function(table, objColVals, condition, cd) {
    var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;

    console.log(dbQuery);
    connection.query(dbQuery, vals, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
  });
}, 

};

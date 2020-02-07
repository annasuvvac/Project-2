// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var hotelData = require('../data/PushHotelTableData');
var carRentalData = require('../data/PushCarRentalTableData');
var flightData= require('../data/pushFlightTableData');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  var db = require('../models');

  // Routes =============================================================


  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


  app.get('/', function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbBooking) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbBooking);
    });

  });
  res.json(hotelData);
};

  app.get("/api/htmlforcarrental", function(req, res) {
    res.json(carRentalData);
      // Find one Author with the id in req.params.id and return them to the user with res.json
      db.Author.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbAuthor) {
        res.json(dbAuthor);
      });
    });
  });

app.get('/api/htmlforflight', function(req, res) {
  res.json(flightData);
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

  app.post("/api/htmlforhotel", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (hotelData.length < 5) {
      hotelData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
  app.delete("/api/authors/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};

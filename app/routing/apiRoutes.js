
var currentData = require("../data/currentData");

module.exports = function(app) {


  app.get("/api/survey", function(req, res) {
    res.json(currentData);
  });

  app.post("/api/survey", function(req, res) {

      currentData.push(req.body);
      res.json(true);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    currentData = [];

    console.log(currentData);
  });
};


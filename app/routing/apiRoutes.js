
var currentData = require("../data/friends");


module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(currentData);
  });

  app.post("/api/survey", function(req, res) {
      console.log(req.body);
      currentData.push(req.body);
      res.json(currentData);
  });

  // ---------------------------------------------------------------------------

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    currentData = [];

    console.log(currentData);
  });
};


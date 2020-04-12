const mongoose = require("mongoose");

module.exports = {
  connectTo: function(host = "mondodb", port = "27017") {
    return mongoose.connect(`mongodb://${host}:${port}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
};

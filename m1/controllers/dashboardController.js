const path = require('path');

const dashboard = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/dashboard.html"));
  };
  
module.exports = dashboard;
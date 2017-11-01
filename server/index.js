const express = require('express');
const path = require('path');

let app = express();

// Serve static files
app.get('*/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/bundle.js'));
});
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

// Launch/export server
if (module.parent) {
  module.exports = app;
} else {
  let port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('Listening on port ' + port);
  });
}
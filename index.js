const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log('Server started : '+PORT+'.');
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/404.html');
});
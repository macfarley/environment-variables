require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running!');
});
let port = process.env.PORT || 3000;
// adjust the following:
app.listen(port, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});

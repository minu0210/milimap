const express = require('express');
const app = express();
const port = 3939;

const path = require('path');

app.use('/', express.static('./src'));

app.get('/', (req, res) => {
  const htmlPath = path.resolve(__dirname + '/src/index.html');

  res.sendFile(htmlPath);
});

app.get('/foodInfo', (req, res) => {
  const htmlPath = path.resolve(__dirname + '/src/foodInfo/foodInfo.html');

  res.sendFile(htmlPath);
});

app.get('/px', (req, res) => {
  const htmlPath = path.resolve(__dirname + './PXhotmenu.html');

  res.sendFile(htmlPath);
});

app.get('/letter', (req, res) => {
  const htmlPath = path.resolve(__dirname + '/src/letter/letter.html');

  res.sendFile(htmlPath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

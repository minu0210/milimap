const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use('/', express.static('./src'));

app.get('/', (req, res) => {
  const htmlPath = path.resolve(__dirname + '/src/index.html');

  res.sendFile(htmlPath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

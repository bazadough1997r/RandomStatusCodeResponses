const express = require('express');
const api = require('./api');

const app = express();
const port = 5000;

app.use(express.json());
app.use(api);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const path    = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname)));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.rox'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
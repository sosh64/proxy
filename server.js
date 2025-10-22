const express = require('express');
const path   = require('path');
const app    = express();

// Serve the single HTML file (named proxy.html or index.html)
app.use(express.static(path.join(__dirname)));

// Fallback for SPA routes (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'proxy.html')); // or index.html
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server listening on ${PORT}`));

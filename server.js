// server.js – tiny Express server that serves the static HTML file

const express = require('express');
const path    = require('path');

const app = express();

/* -------------------------------------------------------------
   Serve any static assets that sit next to server.js
   (e.g., images, extra CSS files, etc.)
   ------------------------------------------------------------- */
app.use(express.static(path.resolve(__dirname)));

/* -------------------------------------------------------------
   Fallback for all routes – always return the main HTML page.
   If you rename the file later, change the filename in the line
   below accordingly.
   ------------------------------------------------------------- */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.rox')); // <-- main HTML file
});

/* -------------------------------------------------------------
   Render injects the listening port via the PORT environment
   variable.  Fall back to 10000 for local testing.
   ------------------------------------------------------------- */
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
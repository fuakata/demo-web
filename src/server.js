const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const versionPath = path.join(__dirname, '..', 'VERSION');
let version = '1.0.0'; // Default version

if (fs.existsSync(versionPath)) {
  version = fs.readFileSync(versionPath, 'utf8').trim();
}

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js Web Server</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f4f4f4;
        }
        .container {
          text-align: center;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: white;
        }
        h1 {
          color: #333;
        }
        p {
          color: #555;
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Demo Web Server</h1>
        <p>Version: <span id="version">${version}</span></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

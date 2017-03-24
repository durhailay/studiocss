import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './lib/app';

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  let output = renderToString(<App />);
  let htmlToSend = `
  <!doctype html>
  <html>
    <head>
      <title>Studio CSS</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="root">${output}</div>
      <script src="/vendors.bundle.js"></script>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `;
  res.send(htmlToSend);
});

app.listen(4000, () => console.log('Server running'));

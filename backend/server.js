import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.eventNames.PORT || 7000;
app.listen(port, () => {
  console.log(`server ready at http://localhost:${port}`);
});

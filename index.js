const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

let count = 0; // Başlangıçta count'u 0 olarak ayarla

app.get('/', (req, res) => {
  count++; // Sayıyı bir artır
  res.send(count.toString()); // Artırılmış sayıyı istemciye gönder
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

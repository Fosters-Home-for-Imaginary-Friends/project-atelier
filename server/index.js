const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

// app.get('*.css', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.use(express.static(path.join(__dirname, '/../public')));
app.listen(port, () => {console.log('listening on port: ', 3000)});
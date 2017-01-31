const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// CONFIG

require('./db/config');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

// ROUTES

app.use('/kittens', require('./routes/kittens'));
app.use(require('./routes/error'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})

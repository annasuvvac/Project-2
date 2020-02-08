const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;


app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', expbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
require('./routes/controller.js');

app.listen(PORT, () => {
  console.log('Server is starting at port', PORT);
});

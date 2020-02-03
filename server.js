const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require ('path');

const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname + './public')));


app.use(bodyParser.urlencoded ({ extended: false }));

const expbs = require('express-handlebars');

app.engine('handlebars', expbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//routing 
app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log('Server is starting at port', PORT);

});

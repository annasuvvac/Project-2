const axios = require("axios");
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
  axios({
    "method":"GET",
    "url":"https://hotels4.p.rapidapi.com/locations/search",
    "headers":{
    "content-type":"application/json",
    "x-rapidapi-host":"hotels4.p.rapidapi.com",
    "x-rapidapi-key":"0678ac7d4dmsh7ec92c295c5eef2p194aa9jsnf39296021020"
    },
    "params":{
    "locale":"en_US",
    "query":"new york"
    }
    })
    .then((response)=>{
      console.log(response.data)
      res.render('index');

    })
    .catch((error)=>{
      res.render('index');

      console.log(error)
    })
});


app.listen(PORT, () => {
    console.log('Server is starting at port', PORT);

});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', expbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
require('./routes/controller.js');

app.listen(PORT, () => {
  console.log('Server is starting at port', PORT);
});



// creating the onclick event for each buttons
// click each button: home, hotel,and flights
// event.listener required 

// function (eventName, data){
//   if (document.createEvent) {
//     var evt = document.createEvent('HTMLEvents');
//     evt.initEvent(eventName, true, false);
//     evt = this.extend(evt, data);
//     return this.each(function (v) {
//       return v.dispatchEvent(evt);
//     });
//   }
// }

// const = hotelSearch;


// function hotelSearch(onclick) {
  
// }








  

          

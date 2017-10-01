const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const queensRoutes = require('./app/routes');



app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));



// all the routes are render through this
app.use('/', queensRoutes.router);


app.listen(app.get('port'), () => {
  console.log('The app is running on port: ' + app.get('port'));
});

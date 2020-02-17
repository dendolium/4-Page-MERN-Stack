const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const users = require("./routes/api/users");
const Countries = require('./routes/api/Counties');
const Areas = require('./routes/api/Areas');
const Categories = require('./routes/api/Category');
const Ads = require('./routes/api/Ads');

var cors = require('cors')

const port = 5000;

//middlewares being used
app.use(cors())
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.get('/', (req, res ) => {
    res.send('Hello Bhaa')
}) 




const DB = require('./config/config').mongoURI;


mongoose.connect(DB, {useUnifiedTopology: true})
    .then(() => console.log('DB Connnected'))
    .catch(Err => console.log(Err))

app.use(passport.initialize());
require("./config/passport")(passport);



//routes
app.use('/api/countries', Countries);
app.use('/api/categories', Categories);
app.use('/api/ads', Ads);
app.use('/api/areas', Areas);
app.use('/api/users', users);
// app.post('')


    app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})
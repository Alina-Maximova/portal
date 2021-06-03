const express = require('express');
const passport = require('passport')
const app = express();
var cors = require('cors')
const port = process.env.PORT ||8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())
require('./middleware/passport')(passport)

const routes = require('./settings/routes')
routes(app)

app.listen (port,() => {
    console.log(`App listen on port ${port}`);
})
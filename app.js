const express = require('express')
const router=require('./module/router')
const config=require('./module/config');
const bodyParser = require('body-parser');
var session=require('express-session');
const app = express()
var port=config.port;
app.use(session({
  secret: 'usersession',
  name: 'bssbuserdata',  
  cookie: {maxAge: 24*60*60*1000 }, 
  resave: false,
  saveUninitialized: true,
}));
app.use('/public/',express.static('public'))
app.use(router)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json)
app.engine("html",require("express-art-template")) 
app.set('views','./views')



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


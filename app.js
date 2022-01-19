const express = require('express')
const app = express();


// CONFIG
// require('./private/services/db-connection.js');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.use(express.static('public'));
//app.use(express.json())

// app.use(function(req, res, next){
//   let domain = `${req.protocol}://${req.hostname}`;
//   if(!domain.includes('localhost')){
//     domain = domain.replace(/http/,'https');
//   }
//   res.locals.domain = domain;

//   next();
// });

// routes
app.get('*', function(req, res){

    let time = !!req.query.t ? req.query.t : 5
    time = time * 1000
    console.log(time)
    setTimeout(function(){
        res.json({'response': 'hello'})
    }, time, 'test fn');
    
});
  


  app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
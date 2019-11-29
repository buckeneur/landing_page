var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/landingpage');
});

// router.post('/addition', function(req, res, next) {
//   const newAdd = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };
//   res.json(newAdd);
// });

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'devPwd4r0Oo+',
//   database: 'main'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log('Yay! You are connected to the database!');
// })

module.exports = router;

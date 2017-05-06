let express = require('express');

let app = express();
app.use(express.static('dest'));

let port = 3000;
app.listen(port, ()=> {
  console.log('Express server started');
});

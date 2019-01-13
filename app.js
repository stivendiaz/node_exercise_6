const express = require('express');
var UAParser = require('ua-parser-js');
const app = express();



app.get('/', (req, res) => {
    res.send(req.headers['user-agent']);
});


app.listen(3000, () => console.log('Listening on port 3000!'));
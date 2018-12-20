const express = require('express');
var UAParser = require('ua-parser-js');
const app = express();



app.get('/', (req, res) => {
    var parser = new UAParser();
    var ua = req.headers['user-agent'];
    var browserName = parser.setUA(ua).getBrowser().name;
    var fullBrowserVersion = parser.setUA(ua).getBrowser().version;
    var browserVersion = fullBrowserVersion.split(".", 1).toString();
    var browserVersionNumber = Number(browserVersion);

    res.send(`<h1>${browserName}<h1>`);

    console.log(parser.setUA(ua).getBrowser());


});


app.listen(3000, () => console.log('Listening on port 3000!'));
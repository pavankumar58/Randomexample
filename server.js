var express = require('express');
var app = express();

var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/contactlist', function (req, res) {
    console.log("recieved a Get req")

    person1 = {
        name: 'Tom',
        username: 'tommy',
        email: 'tommy@timmy.com'
    };

    person2 = {
        name: 'John',
        username: 'legend',
        email: 'John@legend.com'
    };

    person3 = {
        name: 'Molly',
        username: 'Mooo',
        email: 'Molly@moo.com'
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});
app.listen(3000);
console.log("server running on port 3000");
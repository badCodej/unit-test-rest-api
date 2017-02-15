var express = require('express'),
    bodyParser = require('body-parser'),
    controller = require('./router');

var app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        state: 'ON'
    })
})

app.get('/users', controller.getAll);
app.get('/users/:id', controller.getById);
app.post('/users', controller.add);

app.listen(3000, () => {
    console.log('Server started: 3000');
})

module.exports = app;
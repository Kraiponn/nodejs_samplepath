var exp = require('express');
var routing = exp();
routing.get('/', (req, res) => {
    res.send('<h2>Test routing with Express successful.</h2>');
});

routing.get('/profile', (req, res) => {
    res.send('<h2>Page Profile...</h2>');
});

// routing.get('/profile/:user', (req, res) => {
//     res.send(`<h2>Profile user : ${req.params.user} </h2>`);
// });

routing.use('/profile/:user', (req, res, next) => {
    console.log('Request: ' + new Date(), req.method, req.url);
});

routing.listen(8081, () => { console.log('Express successful'); });
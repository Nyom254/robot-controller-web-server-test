const express = require('express');
const app = express()
const port = 80;

app.get('/', (req, res) => {
    console.log(req.query.State);
    res.send('hello')
});

app.listen(port, () => {
    console.log(`server is running at ${port}`)
});

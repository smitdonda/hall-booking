const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000; 

let room = [];
let book = [];

app.get('/rdetails', (req, res) => {
    res.json({
        statusCode: 200,
        message: 'room details successfully',
        data:room
    })
})

app.get('/bdetails', (req, res) => {
    res.json({
        statusCode: 200,
        message: 'booking details successfully',
        data:book
    })
})


app.post('/room', (req, res) => {
    room.push(req.body)
    res.send({
        statusCode: 200,
        massage:"room Saved Successfully"
    })
})

app.post('/book', (req, res) => {
    book.push(req.body)
    res.send({
        statusCode: 200,
        massage:"book Saved Successfully"
    })
})


app.listen(PORT,()=>console.log("Server is up in",PORT))    
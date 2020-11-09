const express = require("express")

const app = express()
app.use('/', express.static('public')) //for parsing application/json
app.use(express.urlencoded({extended:true})) //for parsing application/x-www-form-url encoded

app.post('/sendmessage', (request, response) => {
    console.log(request.body)
response.send('I got your message '+ request.body.fullname + ' ' + request.body.message)
})

app.listen(8080);

module.exports = app;

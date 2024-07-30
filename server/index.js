const express = require('express')
const bodyParser = require('body-parser')
const {Server}= require('socket.io')

const io = new Server();
const app = express()

app.use(bodyParser.json())
io.on('connection',()=>{
    
})

app.listen(8000 ,()=>{
    console.log('http server running on 8000')
})

io.listen(8001)
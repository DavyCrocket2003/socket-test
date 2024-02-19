import express from "express"
import http from "http"
import { Server } from "socket.io"




const app = express()
const server = http.createServer(app)
const io = new Server(server)



io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chat message', (msg) => {
        console.log(msg)
        io.emit('chat message', msg)
    })
})


app.get('/', (req, res) => {
    res.sendFile('/Users/davyc/devMountain/socket-test/index.html')
  })
  
  server.listen(3000, () => {
    console.log('listening on http://localhost:3000')
  })
console.clear()
import express from "express"
import url from "url"
import path from "path"
import { Server } from "socket.io"
import http from 'http'
const io = new Server(http)

const app = express()
const port = process.env.PORT || 3000

//Obtém o caminho para o arquivo atual, nesse caso server.js
const actualPath = url.fileURLToPath(import.meta.url)

// A partir do diretório atual, podemos obter o caminho para o diretório publico
const publicPath = path.join(actualPath, "../../", "public")

// Acesso ao index do html
app.use(express.static(publicPath))

const httpServer = http.createServer(app)

httpServer.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

io.on('connection', () => console.log("oi"))






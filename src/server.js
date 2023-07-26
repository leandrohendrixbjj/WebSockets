console.clear()
import express from "express"
import url from "url"
import path from "path"
import { Server } from "socket.io"
import http from "http"

const app = express()
const PORT = process.env.PORT || 3000

// Servidor http
const httpServer = http.createServer(app)
const io = new Server(httpServer);

//Obtém o caminho para o arquivo atual, nesse caso server.js
const actualPath = url.fileURLToPath(import.meta.url)

// A partir do diretório atual, podemos obter o caminho para o diretório publico
const publicPath = path.join(actualPath, "../../", "public/")

// Acesso ao index do html
app.use(express.static(publicPath))

// Captura se alguém se conectou a pagina html
io.on("connection", (socket) => {
    console.log(`A user is connected ${socket.id}`);
});

// Listen Servidor http
httpServer.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})



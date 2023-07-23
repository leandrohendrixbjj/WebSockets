import express from "express"
import url from "url"
import path from "path"

console.clear()
const app = express()
const port = process.env.PORT || 3000

//Obtém o caminho para o arquivo atual, nesse caso server.js
const actualPath = url.fileURLToPath(import.meta.url)

// Obtem o caminho para o diretório publico
const publicPath = path.join(actualPath, "../../", "public")

// Acesso ao index do html
app.use(express.static(publicPath))

app.listen(PORT, () => {
    console.log("Server is running at 3000")
})

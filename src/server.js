import express from "express"
import url from "url"
import path from "path"

console.clear()
const app = express()
const port = process.env.port || 3000

//Obtém o caminho para o arquivo atual, nesse caso server.js
const actualPath = url.fileURLToPath(import.meta.url)

// Obtem o caminho para o diretório publico
const publicPath = path.join(actualPath, "../../", "public")
console.log(publicPath);
app.use(express.static(publicPath))

app.listen(port, () => {
    console.log("Server is running at 3000")
})

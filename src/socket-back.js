import io from "./server.js";

// Captura se alguém se conectou a pagina html
io.on("connection", (socket) => {
    console.log(`A user is connected ${socket.id}`);

    // Captura se alguém digitou um texto
    socket.on('textEditor', (text) => {
        console.log('Text', text)
    })
});


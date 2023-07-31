const socket = io();

const textEditor = document.getElementById('editor-texto')

textEditor.addEventListener('keyup', (event) => {
    socket.emit('textEditor', textEditor.value)
})
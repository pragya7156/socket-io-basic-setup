let socket = io();    // no need to specify any url while calling io() since it defaults to trying to connect to the host that serves the page.

let btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    socket.emit('button clicked')
})
socket.on('emitting from server side', () => {
    let text = document.createElement('div');
    text.innerHTML = 'socket io basic setup and event emitting';
    document.body.appendChild(text);
})

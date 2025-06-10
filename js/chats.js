document.querySelector('.search-input').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const chatItems = document.querySelectorAll('.chat-item');

    chatItems.forEach(item => {
        const name = item.querySelector('.chat-name').textContent.toLowerCase();
        const message = item.querySelector('.chat-last-message').textContent.toLowerCase();

        if (name.includes(searchTerm) || message.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        console.log('Cambiar a chat con:', this.querySelector('.chat-name').textContent);
    });
});

document.querySelector('.send-btn').addEventListener('click', function () {
    const input = document.querySelector('.chat-input');
    if (input.value.trim()) {
        // Aquí enviarías el mensaje
        console.log('Enviar mensaje:', input.value);
        input.value = '';
    }
});

document.querySelector('.chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.send-btn').click();
    }
});
import "./index.css"

document.addEventListener("DOMContentLoaded", () => {
    const chat = document.getElementById('chat');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const now = new Date();
    const name = document.querySelector(".header-title").textContent || "Anonymous";
    const form = document.querySelector('.form');

    // Загрузка сообщений из localStorage
    loadMessages();

    // Обработка отправки сообщения по кнопке
    sendBtn.addEventListener('click', sendMessage);

    // Обработка отправки сообщения по нажатию Enter
    form.addEventListener('submit', sendMessage);

    // Функция отправки сообщения
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

            const messageObject = {
                message: message,
                time: time,
                name: name
            };

            addMessageToChat(messageObject);
            saveMessageToLocalStorage(messageObject);
            messageInput.value = ''; // Очистка поля ввода
        }
    }

    // Функция добавления сообщения в чат
    function addMessageToChat(messageObject) {
        const messageElement = document.createElement('div');
        const messageWrapElement = document.createElement('div');
        const messageInfoElement = document.createElement('div');

        messageWrapElement.classList.add('message-wrap');
        messageElement.classList.add('message-element');
        messageInfoElement.classList.add('message-info');

        messageInfoElement.textContent = `${messageObject.name} ${messageObject.time}`;
        messageElement.textContent = `${messageObject.message}`;
        messageWrapElement.appendChild(messageInfoElement);
        messageWrapElement.appendChild(messageElement);
        chat.appendChild(messageWrapElement);
        chat.scrollTop = chat.scrollHeight; // Прокрутка вниз
    }

    // Сохранение сообщений в localStorage
    function saveMessageToLocalStorage(messageObject) {
        let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(messageObject);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    // Загрузка сообщений из localStorage
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.forEach(message => addMessageToChat(message));
    }
});

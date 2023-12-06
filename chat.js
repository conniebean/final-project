function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    const chatButton = document.getElementById('chatButton');
    
    chatContainer.classList.toggle('hidden');
    chatButton.classList.toggle('hidden');
}

document.getElementById('messageInput').addEventListener('keypress', function(event) {
    const chatContainer = document.getElementById('chatContainer');

    
    if (event.key === 'Enter' && !chatContainer.classList.contains('hidden')) {
        event.preventDefault(); 
        sendMessage();
    }
});

function sendMessage() {
    const chat = document.getElementById('chat');
    const messageInput = document.getElementById('messageInput');

    const userMessage = messageInput.value.trim();
    if (userMessage) {
        chat.innerHTML += `<div class="text-right"><p class="inline-block bg-gray-300 rounded p-2 my-2">${userMessage}</p></div>`;

        setTimeout(() => {
            chat.innerHTML += `<div class="text-left"><p class="inline-block bg-red-300 rounded p-2 my-2">Sorry, that is outside of my capabilities, please call our support line.</p></div>`;
            chat.scrollTop = chat.scrollHeight;
        }, 1000);

        messageInput.value = '';
        chat.scrollTop = chat.scrollHeight;
    }
}

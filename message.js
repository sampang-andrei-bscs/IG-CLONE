document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('message-input');
    const messageText = input.value;

    if (messageText.trim() === '') return;

    // Add user message
    addMessage('user', messageText);

    // Simulate bot response
    setTimeout(() => {
        addMessage('bot', 'You said: ' + messageText);
    }, 1000);

    input.value = ''; // Clear input
});

function addMessage(sender, text) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);

    // Auto-scroll to the bottom
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
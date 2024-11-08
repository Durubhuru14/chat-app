document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.querySelector('.chat-messages');
    const sendButton = document.querySelector('.send-btn');

    // Function to send a message
    function sendMessage() {
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            // Create the message div for the sent message
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'sent');
            const messageContent = document.createElement('p');
            messageContent.textContent = messageText;
            messageDiv.appendChild(messageContent);

            // Append the message to the chatMessages container
            chatMessages.appendChild(messageDiv);

            // Clear the input field
            messageInput.value = "";

            // Scroll the chat to the bottom after the message is sent
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    // Event listener for the send button
    sendButton.addEventListener('click', sendMessage);

    // Event listener for the 'Enter' key
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
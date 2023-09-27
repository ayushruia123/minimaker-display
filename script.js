function sendMessage() {
    var messageInput = document.getElementById("message");
    var messageText = messageInput.value;

    if (messageText.trim() === "") {
        return;
    }

    var chatOutput = document.getElementById("chat-output");
    var messageElement = document.createElement("div");
    messageElement.textContent = "You: " + messageText;
    chatOutput.appendChild(messageElement);

    // Send the message to the server (simulated).
    // In a real chat application, you would use server-side code and a database.
    simulateServerMessage("Brother: " + messageText);

    messageInput.value = "";
}

function simulateServerMessage(message) {
    // Simulate receiving a message from the server.
    var chatOutput = document.getElementById("chat-output");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
}

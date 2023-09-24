copyfunction sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageContainer = document.getElementById("message-container");
    var message = messageInput.value;

    if (message !== "") {
        var newMessage = document.createElement("div");
        newMessage.textContent = message;
        messageContainer.appendChild(newMessage);
        messageInput.value = "";
    }
}

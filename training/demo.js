function toggleChatbox() {
  var chatbox = document.getElementById("chatbox");
  chatbox.classList.toggle("hidden");
}

function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatboxContent = document.getElementById("chatbox-content");
  var newMessage = document.createElement("div");
  newMessage.innerText = "User: " + userInput;
  chatboxContent.appendChild(newMessage);
  document.getElementById("user-input").value = "";
}

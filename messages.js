function sendMessage() {
const input = document.getElementById("messageInput");
const msgBox = document.getElementById("chatMessages");


msgBox.innerHTML += `<div class='post-card'>${input.value}</div>`;
input.value = "";
}
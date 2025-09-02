const loginForm = document.getElementById("loginForm");
const chatSection = document.getElementById("chatSection");
const chatBox = document.getElementById("chatBox");
const capturedDiv = document.getElementById("capturedData");
const showUser = document.getElementById("showUser");
const showPass = document.getElementById("showPass");
const messageForm = document.getElementById("messageForm");
const messageInput = document.getElementById("messageInput");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Exibe os dados capturados
    showUser.textContent = "Login digitado: " + username;
    showPass.textContent = "Senha digitada: " + password;
    capturedDiv.style.display = "block";

    // Esconde login e mostra chat
    loginForm.style.display = "none";
    chatSection.style.display = "flex";

    // Mensagem de boas-vindas
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.textContent = "Olá " + username + "! Agora você pode conversar aqui.";
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Enviar mensagens
messageForm.addEventListener("submit", function(e){
    e.preventDefault();
    const msg = messageInput.value.trim();
    if(!msg) return;

    // Mensagem do usuário
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.textContent = msg;
    chatBox.appendChild(userMsg);

    // Resposta do bot
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.classList.add("message", "bot");
        botMsg.textContent = "Resposta: " + msg;
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);

    messageInput.value = "";
});

// Functions to show different content sections
function showDashboard() {
    document.getElementById('content').innerHTML = '<h2>Choose Classes</h2>';
}

function showSchedule() {
    document.getElementById('content').innerHTML = '<h2>Meeting Game</h2>';
}

function showProject() {
    document.getElementById('content').innerHTML = '<h2>Project Details</h2>';
}

function showTeammembers() {
    document.getElementById('content').innerHTML = '<h2>Team Members Details</h2>';
}

function showWork() {
    document.getElementById('content').innerHTML = '<h2>What work you have given</h2>';
}

// Sidebar and Dark Mode toggling
const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});

// Chat functionality
const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input button');
const chatbox = document.querySelector(".chatbox");

// Function to add chat message
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    chatLi.innerHTML = `<p>${message}</p>`;
    return chatLi;
};

// Function to generate a bot response
const generateResponse = (incomingChatLi, userMessage) => {
    const messageElement = incomingChatLi.querySelector("p");

    fetch('http://localhost:6969', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input_string: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        messageElement.textContent = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Problem detected!";
    })
    .finally(() => {
        chatbox.scrollTo(0, chatbox.scrollHeight);
    });
};

// Handle chat input and send message
const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) {
        return;
    }

    // Append user message to chatbox
    chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Simulate bot thinking and then generate response
    setTimeout(() => {
        const incomingChatLi = createChatLi("Wait a few sec...", "chat-incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi, userMessage);
    }, 600);

    // Clear the input field
    chatInput.value = '';
};

sendChatBtn.addEventListener("click", handleChat);

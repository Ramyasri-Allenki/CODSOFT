// 🌟 SmartBot v2 - Full Functional Script 🌟
// Written for a 9:16 animated chatbot with working buttons

document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTS ---
  const chatBox = document.getElementById("chat-box");
  const messageInput = document.getElementById("message");
  const sendBtn = document.getElementById("send");
  const clearBtn = document.getElementById("clear");
  const exportBtn = document.getElementById("export");
  const aboutBtn = document.getElementById("about");
  const aboutModal = document.getElementById("aboutModal");
  const closeAbout = document.getElementById("closeAbout");

  // --- APPEND MESSAGE FUNCTION ---
  function appendMessage(sender, text) {
    const div = document.createElement("div");
    div.classList.add(sender, "message", "animated-entry");
    div.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // --- BOT REPLY LOGIC ---
  function getBotReply(userInput) {
    const msg = userInput.toLowerCase();

    // Greetings & Small Talk
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
      return "Hey there! 👋 I’m SmartBot v2. How’s your day going?";
    if (msg.includes("how are you"))
      return "I’m feeling smart as ever 🤖 Thanks for asking!";
    if (msg.includes("who are you"))
      return "I’m SmartBot v2 — your rule-based virtual assistant!";
    if (msg.includes("what can you do"))
      return "I can chat, tell jokes, share fun facts, give you the time or date, and more! 💬";

    // Time & Date
    if (msg.includes("time"))
      return "⏰ The current time is " + new Date().toLocaleTimeString();
    if (msg.includes("date"))
      return "📅 Today is " + new Date().toLocaleDateString();

    // Personal Info
    if (msg.includes("your name"))
      return "I’m SmartBot v2 — a chatbot built to make your day cooler 😎!";
    if (msg.includes("who created you") || msg.includes("your creator"))
      return "I was created by a passionate intern 👩‍💻 as part of a web development project!";

    // Fun Section
    if (msg.includes("joke"))
      return "😂 Why did the computer get cold? Because it left its Windows open!";
    if (msg.includes("fun fact"))
      return "🤔 Did you know? The first computer bug was an actual *moth* found inside a computer in 1947!";
    if (msg.includes("motivate") || msg.includes("motivation"))
      return "💪 Remember, success doesn’t come from what you do occasionally, but from what you do consistently!";
    if (msg.includes("quote"))
      return "💬 'The future belongs to those who believe in the beauty of their dreams.' – Eleanor Roosevelt";
    if (msg.includes("riddle"))
      return "🧩 What has to be broken before you can use it? — An egg! 🥚";

    // Learning & Knowledge
    if (msg.includes("ai") || msg.includes("artificial intelligence"))
      return "AI stands for Artificial Intelligence — it’s all about teaching computers to think and learn like humans!";
    if (msg.includes("html"))
      return "HTML (HyperText Markup Language) is used to structure web pages 🌐.";
    if (msg.includes("css"))
      return "CSS (Cascading Style Sheets) is what makes websites beautiful 💅.";
    if (msg.includes("javascript"))
      return "JavaScript adds life to web pages — it’s how I’m talking to you right now! ⚡";
    if (msg.includes("python"))
      return "🐍 Python is a powerful, beginner-friendly programming language — used for AI, web apps, and more.";

    // Help Section
    if (msg.includes("help"))
      return "You can ask me about time, date, jokes, HTML, CSS, Python, fun facts, quotes, or just chat casually!";
    if (msg.includes("commands"))
      return "Try asking: 'tell me a joke', 'what is AI', 'motivate me', 'give me a quote', 'time', or 'date'.";

    // About / Closing
    if (msg.includes("bye") || msg.includes("goodbye"))
      return "Goodbye 👋 It was nice chatting with you!";
    if (msg.includes("thank"))
      return "You're most welcome 😊";
    if (msg.includes("love you"))
      return "Aww ❤️ You're sweet! I love chatting with you too!";

    // Default Fallback
    return "Hmm 🤔 I’m not sure how to respond to that yet. Try asking me about HTML, jokes, or time!";
  }

  // --- SEND MESSAGE FUNCTION ---
  function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    appendMessage("user", text);
    messageInput.value = "";

    // Simulate typing delay
    const typingDiv = document.createElement("div");
    typingDiv.classList.add("bot", "message", "typing");
    typingDiv.innerHTML = "<p>SmartBot v2 is typing...</p>";
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      typingDiv.remove();
      const reply = getBotReply(text);
      appendMessage("bot", reply);
    }, 1200);
  }

  // --- EVENT LISTENERS ---

  // Send button
  sendBtn.addEventListener("click", sendMessage);

  // Enter key
  messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // Clear Chat
  clearBtn.addEventListener("click", () => {
    chatBox.innerHTML = "";
    const tempMsg = document.createElement("div");
    tempMsg.className = "bot message temp-message";
    tempMsg.innerHTML = "<p>Chat cleared ✅</p>";
    chatBox.appendChild(tempMsg);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      tempMsg.classList.add("fade-out");
      setTimeout(() => tempMsg.remove(), 800);
    }, 2200);
  });

  // Export Chat
  exportBtn.addEventListener("click", () => {
    const allMessages = [...chatBox.querySelectorAll(".message")]
      .map((div) => div.innerText)
      .join("\n\n");
    const blob = new Blob([allMessages], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "smartbot_chat.txt";
    a.click();
  });

  // About Modal
  aboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "flex";
  });
  closeAbout.addEventListener("click", () => {
    aboutModal.style.display = "none";
  });
});

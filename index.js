// Elements
const input = document.getElementById("messageInput");
const micBtn = document.getElementById("micBtn");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

// =============================
// 🎤 Speech to Text
// =============================
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  micBtn.onclick = () => {
    recognition.start();
  };

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    input.value = text;
  };

  recognition.onstart = () => {
    micBtn.innerText = "🎙️ Listening...";
  };

  recognition.onend = () => {
    micBtn.innerText = "🎤 Speak";
  };
} else {
  alert("Speech Recognition not supported in this browser");
}

// =============================
// 🔊 Text to Speech
// =============================
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

// =============================
// 💬 Send Message
// =============================
sendBtn.onclick = () => {
  const userText = input.value;
  if (!userText) return;

  addMessage("You", userText);

  // Fake AI response (for demo)
  const aiResponse = "You said: " + userText;

  setTimeout(() => {
    addMessage("AI", aiResponse);
    speak(aiResponse); // 🔊 AI speaks
  }, 500);

  input.value = "";
};

// =============================
// 🧾 Add message to UI
// =============================
function addMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<b>${sender}:</b> ${text}`;
  chatBox.appendChild(p);
}
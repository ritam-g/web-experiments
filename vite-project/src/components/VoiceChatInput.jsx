import React, { useState, useRef } from "react";

const VoiceChatInput = () => {
  // State to store the text converted from voice
  const [message, setMessage] = useState("");
  // State to track if the mic is currently listening
  const [listening, setListening] = useState(false);

  // Ref to store the SpeechRecognition object
  const recognitionRef = useRef(null);

  // Function to start listening
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    // If already listening, do nothing
    if (listening) return;

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.lang = "en-US";
    recognition.continuous = false; // stops automatically after one phrase
    recognition.interimResults = false; // only final result

    recognition.onstart = () => {
      console.log("Listening started");
      setListening(true);
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      console.log("Recognized:", text);
      setMessage(text);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setListening(false);
    };

    recognition.onend = () => {
      console.log("Listening ended");
      setListening(false);
    };

    try {
      recognition.start(); // start recognition once
    } catch (error) {
      console.error("Speech recognition failed to start:", error);
    }
  };

  // Function to stop listening
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>🎤 Voice Input</h3>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Speak something..."
        style={{ width: "100%", padding: "10px" }}
      />

      <br /><br />

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={startListening}>🎤 Start</button>
        <button onClick={stopListening}>🛑 Stop</button>
      </div>

      <p>Status: {listening ? "Listening..." : "Idle"}</p>
    </div>
  );
};

export default VoiceChatInput;
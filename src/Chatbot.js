import React, { useState } from 'react';
import './Chatbot.css';
import { FaRobot, FaTimes } from 'react-icons/fa';

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Sanjith's assistant. How can I help you?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];

    // Basic hardcoded bot reply logic
    let botReply = "I'm not sure. Please contact Sanjith!";
    if (input.toLowerCase().includes('resume')) botReply = "You can download the resume from the Contact section.";
    else if (input.toLowerCase().includes('email')) botReply = "Email: sanjith@email.com";
    else if (input.toLowerCase().includes('projects')) botReply = "You can scroll to the Projects section!";
    else if (input.toLowerCase().includes('hi') || input.toLowerCase().includes('hello')) botReply = "Hello there!";

    newMessages.push({ text: botReply, sender: 'bot' });
    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className={`chat-popup ${open ? 'open' : ''}`}>
        <div className="chat-header">
          <span>🤖 Sanjith's Assistant</span>
          <FaTimes onClick={toggleChat} className="close-icon" />
        </div>
        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>

      <button className="chatbot-button" onClick={toggleChat}>
        <FaRobot />
      </button>
    </div>
  );
}

export default Chatbot;

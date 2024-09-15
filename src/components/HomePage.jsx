import React from 'react';
import './HomePage.css';  // Add styling similar to your second image

function HomePage() {
  return (
    <div className="home-container">
      <h1>Fruit.AI</h1>
      <p className="tagline">"Be Healthy!"</p>
      <div className="grid-container">
        <div className="grid-item chat">Chat</div>
        <div className="grid-item translate">Translate</div>
        <div className="grid-item faqs">FAQs</div>
        <div className="grid-item about">About</div>
      </div>
    </div>
  );
}

export default HomePage;
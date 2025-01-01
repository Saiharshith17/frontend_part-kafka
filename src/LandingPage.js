import React, { useEffect } from 'react';

const LandingPage = () => {

  const emitEvent = (eventName) => {
    // Send a request to your Java server to emit an event
    fetch('http://localhost:8080/producer/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ event: eventName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to emit event');
        }
      })
      .catch(error => {
        console.error('Error emitting event:', error);
      });
  };

  const handleBuyCourseClick = () => {
    // Emit userClick event when the "Buy a course" button is clicked
    emitEvent('userClick');
  };

  return (
    <div>
      <h1>Welcome to our Course Platform</h1>
      <button onClick={handleBuyCourseClick}>Buy a course</button>
    </div>
  );
};

export default LandingPage;

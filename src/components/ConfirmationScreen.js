import React from 'react';
import eventImage from '../images/Mesa de trabajo 2.png';

const ConfirmationScreen = ({ participants }) => {
  // Determinar el texto dinámicamente
  const greetingText = participants > 1 ? 'Los esperamos!' : 'Te esperamos!';

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-container border border-opacity-20 p-4 rounded-lg w-full max-w-xs shadow-custom">
        <img src={eventImage} alt="Centered" className="mx-auto mb-4" />
        <h1 className="text-center mb-4">{greetingText}</h1>
        <p className="text-center text-green-600">Los Tilos 1795, Punta Chacra Zavalla</p>
      </div>
    </div>
  );
};

export default ConfirmationScreen;


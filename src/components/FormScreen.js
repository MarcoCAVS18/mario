import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import eventImage from '../images/Mesa de trabajo 2.png';

const FormScreen = () => {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Guarda en la colección 'events' con ambas propiedades
      await addDoc(collection(db, 'events'), {
        name,
        participants: Number(participants),
      });

      navigate('/confirmation');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const isFormComplete = name !== '' && participants !== '';

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="bg-container border border-opacity-20 p-4 rounded-lg w-full max-w-xs shadow-xl">
        <img src={eventImage} alt="Centered" className="mx-auto mb-4" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-center font-fredoka">Nombre:</label>
            <input
              type="text"
              className="mt-1 block w-full h-12 px-2 text-sm font-light"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Cecilia Piermatei"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-center font-fredoka">Participantes:</label>
            <div className="flex justify-center">
              <input
                type="number"
                className="mt-1 block w-24 h-12 px-2 text-center"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full text-white py-2 rounded-md font-fredoka ${isFormComplete ? 'bg-button' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!isFormComplete}
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormScreen;

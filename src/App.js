// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormScreen from './components/FormScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormScreen />} />
        <Route path="/confirmation" element={<ConfirmationScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


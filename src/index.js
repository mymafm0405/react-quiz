import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QuizContextProvider } from './context/QuizContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuizContextProvider>
);

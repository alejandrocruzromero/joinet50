import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext'



// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB97WabYLYBz-nFpVIZrPNDetXDpfrASLU",
  authDomain: "coderhouse-react-ale.firebaseapp.com",
  projectId: "coderhouse-react-ale",
  storageBucket: "coderhouse-react-ale.appspot.com",
  messagingSenderId: "788241475166",
  appId: "1:788241475166:web:af638eed9425c05bbb76cf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// FIREBASE

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* // 6) Envolver todos los componentes con el cartProvider en App.js */}
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

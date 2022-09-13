import React from 'react';
import ChatApp from './src/ChatApp';

// Your web app's Firebase configuration

// Initialize Firebase

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBHdS0Rxcs_lYJ9wjJ29PSPb9xWfkn2TMA',
  authDomain: 'tinkoko-mobile.firebaseapp.com',
  databaseURL: 'https://tinkoko-mobile-default-rtdb.firebaseio.com',
  projectId: 'tinkoko-mobile',
  storageBucket: 'tinkoko-mobile.appspot.com',
  messagingSenderId: '522471813018',
  appId: '1:522471813018:web:6f8b0c5056a5b20bb2d423',
  measurementId: "G-CFBGT2092S",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return <ChatApp />;
};

export default App;

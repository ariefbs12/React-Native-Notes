import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB7GsFRy0He7NreDO0UOBq-s0PM2QRZqtM",
    authDomain: "arief-notes-app.firebaseapp.com",
    projectId: "arief-notes-app",
    storageBucket: "arief-notes-app.appspot.com",
    messagingSenderId: "586440463077",
    appId: "1:586440463077:web:7b7dbedb480ace630c7a0c"
  };

const app = initializeApp(firebaseConfig);

export default app;
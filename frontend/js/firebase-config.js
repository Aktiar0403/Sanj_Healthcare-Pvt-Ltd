
const firebaseConfig = {
  apiKey: "AIzaSyBYVOTrCukjtoSMtVAfxvvheqirAldbVkw",
  authDomain: "sanj-healthcare-a32d8.firebaseapp.com",
  projectId: "sanj-healthcare-a32d8",
  storageBucket: "sanj-healthcare-a32d8.firebasestorage.app",
  messagingSenderId: "619095711353",
  appId: "1:619095711353:web:5010c27ba1d7ed0235bea8",
  measurementId: "G-JFTTPE452L"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

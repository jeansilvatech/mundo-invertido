
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAWBc6FhMWsMlt6FW_f5dtpeCQP0g1fYhU",
    authDomain: "mundo-invertido-jean.firebaseapp.com",
    projectId: "mundo-invertido-jean",
    storageBucket: "mundo-invertido-jean.appspot.com",
    messagingSenderId: "94360059784",
    appId: "1:94360059784:web:75a55436a60c5194ffc43d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app;
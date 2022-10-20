// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFqIqVheaLGMtE52aVMlxV7YOczUUomtk",
  authDomain: "ema-jhon-simple-5ba2c.firebaseapp.com",
  projectId: "ema-jhon-simple-5ba2c",
  storageBucket: "ema-jhon-simple-5ba2c.appspot.com",
  messagingSenderId: "40640907221",
  appId: "1:40640907221:web:95dbf04a00c1df3cbd1f5c",
  measurementId: "G-Q005ZFWX6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
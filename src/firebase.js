// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVTlckV3-gRxMyLZzVfpiCv4dgmY2UW3g",
  authDomain: "influencersgrowth.firebaseapp.com",
  projectId: "influencersgrowth",
  storageBucket: "influencersgrowth.firebasestorage.app",
  messagingSenderId: "514440129663",
  appId: "1:514440129663:web:1668443a03979e8da0a34a",
  measurementId: "G-JVRND3VE4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
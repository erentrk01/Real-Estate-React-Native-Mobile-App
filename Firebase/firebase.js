// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-xViwLlCdV8u4NF7z1SJ4f5wl5QZMiyk",
  authDomain: "realestate-a31db.firebaseapp.com",
  projectId: "realestate-a31db",
  storageBucket: "realestate-a31db.appspot.com",
  messagingSenderId: "959966449167",
  appId: "1:959966449167:web:ae6788807e23df9c191d7a",
  measurementId: "G-XY9JFEWF68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2Ccj_5QSe8SoFBjX2DwWBcw4Zy-X1bq4",
  authDomain: "residential-web-project.firebaseapp.com",
  projectId: "residential-web-project",
  storageBucket: "residential-web-project.appspot.com",
  messagingSenderId: "243226734200",
  appId: "1:243226734200:web:ec1785f4e9fefec9ca478d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
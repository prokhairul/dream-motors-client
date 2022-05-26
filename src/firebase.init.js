// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA44DGlodLWQPEJBuDmJraZHjixNZKqxQ",
    authDomain: "dream-motors-khairul.firebaseapp.com",
    projectId: "dream-motors-khairul",
    storageBucket: "dream-motors-khairul.appspot.com",
    messagingSenderId: "311771539075",
    appId: "1:311771539075:web:dd2b68aba171a3aab2ddb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
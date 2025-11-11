// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmKWk7RuxcRF8WUja72vV41IEmhJl8Seo",
    authDomain: "plate-share-10eeb.firebaseapp.com",
    projectId: "plate-share-10eeb",
    storageBucket: "plate-share-10eeb.firebasestorage.app",
    messagingSenderId: "659024593785",
    appId: "1:659024593785:web:c23d5b4e64f10679a965a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
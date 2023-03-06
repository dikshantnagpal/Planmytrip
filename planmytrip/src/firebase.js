// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuNBosCeLNK04Bsfj9ECv8dLQylYJv62I",
    authDomain: "planmytrip-5b9c8.firebaseapp.com",
    projectId: "planmytrip-5b9c8",
    storageBucket: "planmytrip-5b9c8.appspot.com",
    messagingSenderId: "149666637683",
    appId: "1:149666637683:web:8d3f2bc39cb02682060706",
    measurementId: "G-E62JJL0NBL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);
export default app
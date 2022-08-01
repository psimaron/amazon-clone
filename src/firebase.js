import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDY07jqp7EODFWlkeBLjbrmTTPxrh7d7FM",
    authDomain: "clone-407e1.firebaseapp.com",
    projectId: "clone-407e1",
    storageBucket: "clone-407e1.appspot.com",
    messagingSenderId: "825086664372",
    appId: "1:825086664372:web:b6c10ed92af15b1c89c1e1",
    measurementId: "G-X6C6DM2FD7"
 
});

const auth = firebase.auth();

export {auth};
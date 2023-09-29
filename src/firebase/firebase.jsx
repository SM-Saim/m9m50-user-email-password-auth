// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaUiVgn1RP_RoGCQfQUUXsU3AhqnMioLg",
  authDomain: "m9m50-user-email-password-auth.firebaseapp.com",
  projectId: "m9m50-user-email-password-auth",
  storageBucket: "m9m50-user-email-password-auth.appspot.com",
  messagingSenderId: "1042318499665",
  appId: "1:1042318499665:web:fd7e86d78f7e624fd27d70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// export default app;

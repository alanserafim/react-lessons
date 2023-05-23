
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2iC9gidxUrSnTP9NISI9xdvbi_kwlZaU",
  authDomain: "crud-app-88955.firebaseapp.com",
  projectId: "crud-app-88955",
  storageBucket: "crud-app-88955.appspot.com",
  messagingSenderId: "990689360135",
  appId: "1:990689360135:web:5943b72d6641e6b0aa2da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);

export {authentication}
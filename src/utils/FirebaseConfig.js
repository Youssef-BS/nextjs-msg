import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT2-WbjO-51VZKCdQuUkaJHGTeEVdOUl0",
    authDomain: "whatsapp-clone-9e8dc.firebaseapp.com",
    projectId: "whatsapp-clone-9e8dc",
    storageBucket: "whatsapp-clone-9e8dc.appspot.com",
    messagingSenderId: "16500000188",
    appId: "1:16500000188:web:34b9e2891f32af6bcf97b9",
    measurementId: "G-LD18N1LP8P"
  };

  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app);
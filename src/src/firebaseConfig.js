import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQJBvXt4RBA9A9vJGH1myOQTOK4iQUAkg",
  authDomain: "fitplanner-9cccc.firebaseapp.com",
  projectId: "fitplanner-9cccc",
  storageBucket: "fitplanner-9cccc.firebasestorage.app",
  messagingSenderId: "504834471866",
  appId: "1:504834471866:web:e3e82b186d46e84d470f83",
  measurementId: "G-B8SBX24VY4"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
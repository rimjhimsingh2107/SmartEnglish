import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD4agtyc67CVr9XizMTgNz4EeQYycfJ3nI",
  authDomain: "smartenglish-6c809.firebaseapp.com",
  projectId: "smartenglish-6c809",
  storageBucket: "smartenglish-6c809.firebasestorage.app",
  messagingSenderId: "248547523825",
  appId: "1:248547523825:web:4fa41f1f4b70c91a58fd50",
  measurementId: "G-Z2QBYFE5C9"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
export { analytics };

export default app;
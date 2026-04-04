import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxlLebIs5EZZGAIxyXN7Hndb0hDwtbSig",
  authDomain: "portfolio-e1116.firebaseapp.com",
  projectId: "portfolio-e1116",
  storageBucket: "portfolio-e1116.firebasestorage.app",
  messagingSenderId: "144757298122",
  appId: "1:144757298122:web:d9c9f337fabbbd4abd3533",
  measurementId: "G-Z0KGL7XLKJ",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  isSupported()
    .then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    })
    .catch(() => undefined);
}

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

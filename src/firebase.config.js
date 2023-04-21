import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACcyvGvLJA0MqKBqwjyTQaMPDqiMqH6ck",
  authDomain: "sahay-466a8.firebaseapp.com",
  databaseURL: "https://sahay-466a8-default-rtdb.firebaseio.com",
  projectId: "sahay-466a8",
  storageBucket: "sahay-466a8.appspot.com",
  messagingSenderId: "556729651529",
  appId: "1:556729651529:web:17d08ee0f1ded784928a98",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };

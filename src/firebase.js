import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"

// console.log(process.env)
const app = initializeApp({
  // apiKey: process.env.REACT_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_API_KEY_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_API_KEY_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_API_KEY_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_API_KEY_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_API_KEY_APP_ID
  apiKey: "AIzaSyAF3NbcXVIliJZfgCVUlggE7atLc7_Vh5E",
  authDomain: "dr-lempo-dev-28fa8.firebaseapp.com",
  projectId: "dr-lempo-dev-28fa8",
  storageBucket: "dr-lempo-dev-28fa8.appspot.com",
  messagingSenderId: "508538711033",
  appId: "1:508538711033:web:de247d3b9a1a575853ab28"
})

export const auth = getAuth(app)
export default app
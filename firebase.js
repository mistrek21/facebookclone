import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAg2j-FDwbWPM7C3ZDgzuhkgbxYwg5OHcw",
  authDomain: "facebook-58f6f.firebaseapp.com",
  projectId: "facebook-58f6f",
  storageBucket: "facebook-58f6f.appspot.com",
  messagingSenderId: "574250233738",
  appId: "1:574250233738:web:4b7f9261530c06343c6273",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };

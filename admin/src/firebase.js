import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsTtgCf60-8KAanolmR101vJ5QvwAMw18",
  authDomain: "apt-retina-340606.firebaseapp.com",
  databaseURL: "https://apt-retina-340606-default-rtdb.firebaseio.com",
  projectId: "apt-retina-340606",
  storageBucket: "apt-retina-340606.appspot.com",
  messagingSenderId: "617755638355",
  appId: "1:617755638355:web:3e8ca7f6f81a4dd59be4a6",
  measurementId: "G-Z8T33LM1MV"
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
// const analytics = getAnalytics(app);
export default storage;


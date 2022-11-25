import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsTtgCf60-8KAanolmR101vJ5QvwAMw18",
  authDomain: "apt-retina-340606.firebaseapp.com",
  projectId: "apt-retina-340606",
  storageBucket: "apt-retina-340606.appspot.com",
  messagingSenderId: "617755638355",
  appId: "1:617755638355:web:8ac4a8c9ea0148589be4a6",
  measurementId: "G-E5HED7KY5T"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

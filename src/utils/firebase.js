import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCk16sLTiFL3gU5HbBVRCd3wJNiVShiTQY",
    authDomain: "form-b3aac.firebaseapp.com",
    projectId: "form-b3aac",
    storageBucket: "form-b3aac.appspot.com",
    messagingSenderId: "896698571915",
    appId: "1:896698571915:web:a95f6208713a490fc1c88e"
  };

  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();

  export default firebase;
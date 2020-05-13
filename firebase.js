import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjbO8QfiS-EBna4nADWq7yrdIXTzBqX68",
  authDomain: "realtimejobs-579e7.firebaseapp.com",
  databaseURL: "https://realtimejobs-579e7.firebaseio.com",
  projectId: "realtimejobs-579e7",
  storageBucket: "realtimejobs-579e7.appspot.com",
  messagingSenderId: "395324978010",
  appId: "1:395324978010:web:ba564cbe89448701c33963"
};

firebase.initializeApp(firebaseConfig)

export default firebase
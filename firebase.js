import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBWJn7ea3ZF4qPQspZm8DxXYkc3H-NKE5s",
  authDomain: "gatsby-template-a3801.firebaseapp.com",
  databaseURL: "https://gatsby-template-a3801.firebaseio.com",
  projectId: "gatsby-template-a3801",
  storageBucket: "gatsby-template-a3801.appspot.com",
  messagingSenderId: "1006846599264",
  appId: "1:1006846599264:web:3e01c6901c198292d2a305"
};

firebase.initializeApp(firebaseConfig)

export default firebase
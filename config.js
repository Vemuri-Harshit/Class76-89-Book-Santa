import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBc49wzuQKpM_iAgzTJVm01AHT7vr6rgq8",
  authDomain: "book-santa-518e0.firebaseapp.com",
  databaseURL: "https://book-santa-518e0.firebaseio.com",
  projectId: "book-santa-518e0",
  storageBucket: "book-santa-518e0.appspot.com",
  messagingSenderId: "345866840723",
  appId: "1:345866840723:web:9592a44b542c7ac688bb66",
  measurementId: "G-QWB5LJN73T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
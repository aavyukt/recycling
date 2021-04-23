import {firebase} from '@firebase/app';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCINufZMBMwYboKzrUZOTS9lDC-ny1nsnE",
  authDomain: "recycling-4da0e.firebaseapp.com",
  projectId: "recycling-4da0e",
  storageBucket: "recycling-4da0e.appspot.com",
  messagingSenderId: "1031805407188",
  appId: "1:1031805407188:web:d1608e3d6cf12a2acf5041"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
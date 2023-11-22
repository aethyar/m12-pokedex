import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBfSgYA9u_5icJzFqIT2FIxpOJkLnqX5mM',
  authDomain: 'iccs340-95664.firebaseapp.com',
  projectId: 'iccs340-95664',
  storageBucket: 'iccs340-95664.appspot.com',
  messagingSenderId: '881906936357',
  appId: '1:881906936357:web:232cedc25960e7f36b2dcc'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export {
    db
}
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAu9o_JJwBM00y2cls4dj3FPBO-vDZBTaA',
  authDomain: 'codedin-4ef9a.firebaseapp.com',
  projectId: 'codedin-4ef9a',
  storageBucket: 'codedin-4ef9a.appspot.com',
  messagingSenderId: '885196364174',
  appId: '1:885196364174:web:1a1d7237bfffcd04572cdf',
  measurementId: 'G-94P5CT61DG',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};

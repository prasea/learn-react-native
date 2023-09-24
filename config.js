import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHdr76VGku9-1HedYvB-Yw71hi2ai9QgI',
  authDomain: 'virtuosway-intern-task.firebaseapp.com',
  projectId: 'virtuosway-intern-task',
  storageBucket: 'virtuosway-intern-task.appspot.com',
  messagingSenderId: '705620250027',
  appId: '1:705620250027:web:6da69bf5839468351ad6ee',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAmdDmkrgUSpSGAOh2oQGoYGQRKCBoPCKk',
  authDomain: 'netflix-gpt-4c532.firebaseapp.com',
  projectId: 'netflix-gpt-4c532',
  storageBucket: 'netflix-gpt-4c532.appspot.com',
  messagingSenderId: '605141065781',
  appId: '1:605141065781:web:214f6911b7f1e598d6917c',
  measurementId: 'G-JX1P3M1H3G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

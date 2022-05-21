import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  // apiKey: process.env.NX_FIREBASE_API_KEY,
  // authDomain: process.env.NX_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NX_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NX_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NX_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NX_FIREBASE_APP_ID,
  // measurementId: process.env.NX_FIREBASE_MEASUREMENT_ID
  apiKey: 'AIzaSyBf09ynoZEuxO_-WKF-63q5OFO83o9VcvQ',
  authDomain: 'deck-builder-dev.firebaseapp.com',
  projectId: 'deck-builder-dev',
  storageBucket: 'deck-builder-dev.appspot.com',
  messagingSenderId: '1019549027130',
  appId: '1:1019549027130:web:62d95188ac3850a7f5de03',
  measurementId: 'G-6QVM05E798'
})
export type FirebaseUser = firebase.User
export type Timestamp = firebase.firestore.Timestamp
export const auth = app.auth()
export const db = app.firestore();
export default app

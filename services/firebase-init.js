// This is `services/fireinit.js`

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyDIEgJ4uA_BhkxOmlUWESweN4FdpqqhsPk",
  authDomain: "nuxtjs-zeit.firebaseapp.com",
  databaseURL: "https://nuxtjs-zeit.firebaseio.com",
  projectId: "nuxtjs-zeit",
  storageBucket: "nuxtjs-zeit.appspot.com",
  messagingSenderId: "336723426174",
  appId: "1:336723426174:web:e116ad1fd7a7be49cb512f",
  measurementId: "G-S1DE9EENKQ"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase

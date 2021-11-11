// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyATL6q_U4hHc6z7tdnXcuBplkzc2VSlx_E',
  authDomain: 'uber-next-app-v1.firebaseapp.com',
  projectId: 'uber-next-app-v1',
  storageBucket: 'uber-next-app-v1.appspot.com',
  messagingSenderId: '634309470057',
  appId: '1:634309470057:web:06f69b40621451ddadbff8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }

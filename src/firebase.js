import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBKTH7Ow0RNVphY7qvaF-VUjTfHLD6P5w4",
    authDomain: "howdy-80503.firebaseapp.com",
    projectId: "howdy-80503",
    storageBucket: "howdy-80503.appspot.com",
    messagingSenderId: "341289230664",
    appId: "1:341289230664:web:b822d4205db60c5b67937d"
  }).auth();
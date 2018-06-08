import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBhyjSfofcCCsWXfgq-P3Emo1bgsaRHzK4',
  authDomain: 'schedulee-3b1f1.firebaseapp.com',
  databaseURL: 'https://schedulee-3b1f1.firebaseio.com',
  projectId: 'schedulee-3b1f1',
  storageBucket: 'schedulee-3b1f1.appspot.com',
  messagingSenderId: '604594461825'
}

let fire = firebase.initializeApp(config)
export default fire

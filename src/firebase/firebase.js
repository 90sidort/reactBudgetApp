import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCtcRKwa2YNTZfCWtayu5oEIB1vqzfsQVw",
    authDomain: "expensifyts.firebaseapp.com",
    databaseURL: "https://expensifyts.firebaseio.com",
    projectId: "expensifyts",
    storageBucket: "expensifyts.appspot.com",
    messagingSenderId: "1047305633029",
    appId: "1:1047305633029:web:7d889d82a0cc595c4e8b6c"
  };

firebase.initializeApp(config)

const database = firebase.database()

export {firebase, database as default }
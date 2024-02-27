import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA6Gxp3kIpiZtUlzHO1Nt0obLTENpw0JYM",
    authDomain: "teamvotingapp-8f411.firebaseapp.com",
    databaseURL: "https://teamvotingapp-8f411-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "teamvotingapp-8f411",
    storageBucket: "teamvotingapp-8f411.appspot.com",
    messagingSenderId: "249140555411",
    appId: "1:249140555411:web:b4cd8425dc6a8c17932766"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
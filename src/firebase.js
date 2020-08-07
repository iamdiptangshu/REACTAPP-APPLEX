import firebase from 'firebase'
var firebaseConfig = {
apiKey: "AIzaSyBFWJHEublhsM6ysnU28NIohJszvt3U8_s",
authDomain: "blogs-bf275.firebaseapp.com",
databaseURL: "https://blogs-bf275.firebaseio.com",
projectId: "blogs-bf275",
storageBucket: "blogs-bf275.appspot.com",
messagingSenderId: "1044476773722",
appId: "1:1044476773722:web:0f29eddf8cc54caa3bdf63",
measurementId: "G-BS4RJYMBHH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;

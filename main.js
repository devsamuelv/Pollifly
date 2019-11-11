const firebase = require('firebase-admin');
const server_secret = require('./server_key');

firebase.initializeApp({
    credential: firebase.credential.cert(server_secret),
    databaseURL: "https://pollwebsite-e907d.firebaseio.com"
});

let firestore = firebase.firestore();
let firebase_auth = firebase.auth();
const docRef = firestore.doc("submissions/csSubmissions");

function notsurebtn() {
    let yesValue;
    let noVal;
    let idkVal;
    docRef.get().then(function (doc) {
        const myDoc = doc.data();
        yesValue = myDoc.yes;
        noVal = myDoc.no;
        idkVal = myDoc.notSure;
        idkVal + 1;
    }).catch(function (error) {
        console.log("Error Occurred: ",error);
    });

    docRef.set({
        yes: yesValue,
        notSure: idkVal,
        no: noVal
    });
}

function login(USERNAME, PASSWORD) {
    let auth = firebase_auth.app.auth();

    const promise = auth.createUserWithEmailAndPassword(USERNAME, PASSWORD);
    promise.catch(err => console.log(err.message + " " +err.cause));
}

firebase_auth.onAuthStateChanged(firebaseUser => {
   // auth code here
   if (firebaseUser) {
       console.log('User logged in');
   } else {
       console.log("User not logged on");
   }
});
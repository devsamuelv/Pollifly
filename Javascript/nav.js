const firebase = require('firebase-admin');
const server_secret = require('./server_key');

let poll = document.getElementsByClassName('poll');
let tempPoll = document.getElementById('test-poll');
let poll_title = document.getElementById('poll-title');
let users_polls = document.getElementsByClassName('user-polls');

let firestore = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("editor_div").style.display = "none"
      document.getElementById("login_div").style.display = "none";
  
      var userVar = firebase.auth().currentUser;

        var uid = userVar.uid;
        document.getElementById("username").innerHTML = email_id;
        for (firestore.collection(`placeholder/${uid}`).doc().get() in 40) {
            tempPoll.clone(users_polls);
        }
  
      if(userVar != null){

      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("editor_div").style.display = "none"
      document.getElementById("login_div").style.display = "block";
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert(errorMessage);
      console.log(errorCode);
        
      // ...
    });
  }

  function resetAccount() {
    let user_email;
    firebase.auth().generatePasswordResetLink(user_email).catch(function(error){
      let error_message = error.message;
      let error_code = error.code;
      window.alert(error_message);
      console.log(error_code);
    });
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  
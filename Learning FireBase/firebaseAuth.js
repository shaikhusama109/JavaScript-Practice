
  const firebaseConfig = {
    apiKey: "AIzaSyD6lb_oYLhUU-nub4uNNuZOR-ABavgR_5k",
    authDomain: "learning-db-1c4cc.firebaseapp.com",
    databaseURL: "https://learning-db-1c4cc-default-rtdb.firebaseio.com",
    projectId: "learning-db-1c4cc",
    storageBucket: "learning-db-1c4cc.appspot.com",
    messagingSenderId: "169720787281",
    appId: "1:169720787281:web:076c779c1850fbc064e370"
  };
  
    firebase.initializeApp(firebaseConfig);
 

let signup = () =>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value )
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}

let login = () => {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("login Successfully")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
    console.log(errorMessage)
});


}
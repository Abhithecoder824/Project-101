// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBaiK_qwn5xgOqGCW8Dg8fs6ro36clIi-g",
    authDomain: "kwitter-861ee.firebaseapp.com",
    databaseURL: "https://kwitter-861ee-default-rtdb.firebaseio.com",
    projectId: "kwitter-861ee",
    storageBucket: "kwitter-861ee.appspot.com",
    messagingSenderId: "936854073598",
    appId: "1:936854073598:web:c6797a7160f1bae9f1b5af"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}




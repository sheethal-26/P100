// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyD8nGrABwuE0Q3l2jVLPwyLaKUjDsAXbFc",
  authDomain: "p100-7d4c7.firebaseapp.com",
  projectId: "p100-7d4c7",
  storageBucket: "p100-7d4c7.appspot.com",
  messagingSenderId: "771157483855",
  appId: "1:771157483855:web:c9d7d57dad574ce757253a",
  measurementId: "G-EQLBX4THLP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user",
  });

  localStorage.setItem("user_name", user_name);

  window.location = "chat_room.html";
}

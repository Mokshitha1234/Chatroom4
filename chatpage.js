const firebaseConfig = {
    apiKey: "AIzaSyAJewDUp1Wa3_l0ft_es1fEU8PGQ0TWnf8",
    authDomain: "chatapp-36a70.firebaseapp.com",
    databaseURL: "https://chatapp-36a70-default-rtdb.firebaseio.com",
    projectId: "chatapp-36a70",
    storageBucket: "chatapp-36a70.appspot.com",
    messagingSenderId: "429782427304",
    appId: "1:429782427304:web:9c5b9cf84cf8c8a9c2c49d",
    measurementId: "G-HR01R6CLS8"
  };
  
  // Initialize Firebase


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
roomName = localStorage.getItem("roomName")

function send(){
 msg = document.getElementById("msg").value
 firebase.database().ref(roomName).push({
    name: user_name, 
    message: msg,
    like: 0
 })
 document.getElementById("msg").value = ""
 
}









function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("roomName")
    window.location = "index.html"
}
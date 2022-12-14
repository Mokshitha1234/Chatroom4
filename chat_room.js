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


username = localStorage.getItem("user_name")

function start() {
    document.getElementById("welcome").innerHTML = "Welcome " + username + "!"
}

function addRoom() {
    roomName = document.getElementById("roomName").value;
    localStorage.setItem("roomName", roomName)
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    })
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
            });
        });
}
getData();

function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("roomName")
    window.location = "index.html"
}
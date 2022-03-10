user_name = localStorage.getItem("user_name");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnQtaGInTewYzE1i1fTIOtFvmuwbeqCg4",
    authDomain: "project-5803867301051898928.firebaseapp.com",
    databaseURL: "https://project-5803867301051898928-default-rtdb.firebaseio.com",
    projectId: "project-5803867301051898928",
    storageBucket: "project-5803867301051898928.appspot.com",
    messagingSenderId: "575174523908",
    appId: "1:575174523908:web:4f692fd5a6fe5079b3c951"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
      
document.getElementById("user_name").innerHTML= "Welcome!"+ user_name;

function add_room()
{
      room_name = document.getElementById("room_name")=value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
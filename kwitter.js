function add_user()
{
    UserName = document.getElementById("user_name").value; 
    localStorage.setItem("user_name", UserName);
    window.location = "kwitter_room.html"; 
}
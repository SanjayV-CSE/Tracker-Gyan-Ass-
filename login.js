/*function auth(){
    var Mail=document.getElementById("Mail").value;
    var Password=document.getElementById("Password").value;
var data = <p>success</p>
    if(Mail=='Gyan@gmail.com' && Password=='Gyan')
    {
        window.location.assign('home.html');
        document.getElementsByClassName("login-status").innerHTML = data
           
    }
    else
    {
        
        var data = document.getElementsByClassName("login-status").innerHTML = "success"
    }
}*/

function auth(){
    var Mail=document.getElementById("Mail").value;
    var Password=document.getElementById("Password").value;

    if(Mail=='Gyan@gmail.com' && Password=='Gyan')
    {
        window.location.assign('home.html');
        alert("Login Successfully ");
    }
    else
    {
        alert("Invalid Credentials");
        return;
    }
}
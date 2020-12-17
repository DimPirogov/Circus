//------------------
//login page JS-----
//------------------
function check(form){
    if(form.userNameInput.value == "admin" && form.passwordInput.value == "cirkus"){
        window.open('about.html');
    }
    else{
        alert("Error Password or User name");
    }
}
//--------------------
//login page JS ends--
//--------------------
//------------------
//login page JS-----
//------------------
function check(form){
    if(form.userNameInput.value == "admin" && form.passwordInput.value == "cirkus"){
        window.open('admin.html');
    }
    else{
        alert("Error Password or User name");
    }
}
var checkboxesTable1 = document.querySelectorAll("input[type=checkbox][name=table1");
let enabledSetting = [];

checkboxesTable1.forEach(function(checkbox){
    checkbox.addEventListener('change',function(){
        enabledSetting = 
            Array.from(checkboxesTable1)    //Convert checkboxes to an array to use filter and map
                .filter

    })
})

//--------------------
//login page JS ends--
//--------------------
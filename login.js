//-------------------------
//login page JS STARTS-----
//------------------------
function check(form){
    if(form.userNameInput.value == "admin" && form.passwordInput.value == "cirkus"){
        window.open('admin.html');
    }
    else{
        alert("Error Password or User name");
    }
}
//--------------------
//login page JS ends--
//--------------------

//-------------------------
//--Cirkus Kitchen Starts--
//-------------------------

//table 1
function toStartOver1(){
    document.getElementById("eraseTable1").style.display = "none";
    for(let i=11;i<23;i++){
        document.getElementById([i]).checked = false;
    }
    for(let l=111;l<123;l++){
        document.getElementById([l]).innerHTML = " ";
    }
}

function check1(CheckT1){
    if(CheckT1.checked){
        var tableOne = 0;
        for(let i=11;i<23;i++){
            if(document.getElementById([i]).checked == true && tableOne < 13){
                tableOne++;
                if(tableOne == 12){
                    document.getElementById("eraseTable1").style.display = "inline";
                }
            }
        }
    }
}

//table 2
function toStartOver4(){
    document.getElementById("eraseTable4").style.display = "none";
    for(let i=41;i<47;i++){
        document.getElementById([i]).checked = false;
    }
    for(let l=141;l<147;l++){
        document.getElementById([l]).innerHTML = " ";
    }
}

function check4(CheckT4){
    if(CheckT4.checked){
        var tableFour = 0;
        for(let i=41;i<47;i++){
            if(document.getElementById([i]).checked == true && tableFour < 7){
                tableFour++;
                if(tableFour == 6){
                    document.getElementById("eraseTable4").style.display = "inline";
                }
            }
        }
    }
}

//table 6
function toStartOver6(){
    document.getElementById("eraseTable6").style.display = "none";
    for(let i=61;i<73;i++){
        document.getElementById([i]).checked = false;
    }
    for(let l=161;l<173;l++){
        document.getElementById([l]).innerHTML = " ";
    }
}

function check6(CheckT6){
    if(CheckT6.checked){
        var tableSix = 0;
        for(let i=61;i<73;i++){
            if(document.getElementById([i]).checked == true && tableSix < 13){
                tableSix++;
                if(tableSix == 12){
                    document.getElementById("eraseTable6").style.display = "inline";
                }
            }
        }
    }
}

//-------------------------
//--Cirkus Kitchen Ends----
//-------------------------
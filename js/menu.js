var selectedMenu="main";

function menuShow(arg) {
    if((arg=="starters") || (arg=="all"))
        document.getElementById("starters").style.display = "block";
    else
        document.getElementById("starters").style.display = "none";
    
    if((arg=="main") || (arg=="all"))
        document.getElementById("main").style.display = "block";
    else
        document.getElementById("main").style.display = "none";

        if((arg=="desserts") || (arg=="all"))
        document.getElementById("desserts").style.display = "block";
    else
        document.getElementById("desserts").style.display = "none";

        if((arg=="drinks") || (arg=="all"))
        document.getElementById("drinks").style.display = "block";
    else
        document.getElementById("drinks").style.display = "none";

    if((arg=="kids") || (arg=="all"))
        document.getElementById("kids").style.display = "block";
    else
        document.getElementById("kids").style.display = "none";
        
    changeFooter();
}


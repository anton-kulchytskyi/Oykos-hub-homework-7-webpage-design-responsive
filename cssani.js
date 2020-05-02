function showHide(nav) {
    if (document.getElementById(nav)) { 
        var obj = document.getElementById(nav); 
        if (obj.style.display != "flex") { 
            obj.style.display = "flex"; 
        }
        else obj.style.display = "none"; 
    }     
}
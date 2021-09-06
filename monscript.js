// JavaScript Document
//------------© BELQANI CHAHID--------------|
//--------------chahid.belqani@gmail.com----|
//------------------------------------------|

function MenuResponsive(){
    var x = document.getElementById("MonTopMenu");
    if (x.className === "topmenu") {
        x.className += " resp";
    } 
	else{
        x.className = "topmenu";
	}
    
}
	
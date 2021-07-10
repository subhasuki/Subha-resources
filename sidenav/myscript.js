function likeicon(){

    document.getElementById("like").style.display = "block";

    document.getElementById("file").style.display = "none";


    document.getElementById ("btnic").style.transform = "scale(2.5)";

    document.getElementById ("btnfile").style.transform = "none";


    document.getElementById ("btnic").style.marginTop = "-10px";

    document.getElementById("btnic").style.verticalAlign="bottom";

    document.getElementById ("btnfile").style.marginTop = "0";

    document.getElementById("btnfile").style.verticalAlign="none";


    document.getElementById ("opt").style.backgroundImage = "-webkit-gradient(linear, left top, right top, color-stop(.5, hotpink), color-stop(1, yellow))";

    document.getElementById ("opt1").style.backgroundImage = "-webkit-gradient(linear, left top, right top, color-stop(.5, blue), color-stop(1, rgb(0, 255, 234)))";


}


function fileicon(){

    document.getElementById("file").style.display = "block";

    document.getElementById("like").style.display = "none";

    document.getElementById ("btnfile").style.transform = "scale(2.5)";

    document.getElementById ("btnic").style.transform = "none";



    document.getElementById ("btnfile").style.marginTop = "-10px";

    document.getElementById("btnfile").style.verticalAlign="bottom";

    document.getElementById ("btnic").style.marginTop = "0";

    document.getElementById("btnic").style.verticalAlign="none";

 

    document.getElementById ("opt1").style.backgroundImage = "-webkit-gradient(linear, left top, right top, color-stop(.5, hotpink), color-stop(1, yellow))";

    document.getElementById ("opt").style.backgroundImage = "-webkit-gradient(linear, left top, right top, color-stop(.5, blue), color-stop(1, rgb(0, 255, 234)))";
  
}

function openNav() {

    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("mySidenav1").style.width = "240px";
    document.getElementById("mySidenav2").style.width = "240px";
    document.getElementById("mySidenav1").style.display="block";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav2").style.display="block";
    document.getElementById("bline").style.display="none";
    document.getElementById("user").style.display="none";
    // document.getElementById("user").style.display = "flex";

  }
  
  
  function closeNav() {

    document.getElementById("mySidenav1").style.display = "none";
    document.getElementById("user").style.display = "block";
    document.getElementById("bline").style.display="block";
    document.getElementById("user").style.display = "flex";

  }

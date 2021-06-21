function div1(){

    document.getElementById("div1").style.display="none";    
    document.getElementById("div2").style.display="block";
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";

    document.getElementById("go1").style.backgroundColor="white";
    document.getElementById("go2").style.backgroundColor="#FBFDFF";
    document.getElementById("go3").style.backgroundColor="#FBFDFF";
    document.getElementById("go4").style.backgroundColor="#FBFDFF";
    document.getElementById("go5").style.backgroundColor="#FBFDFF";

    document.getElementById("go1").style.borderLeft="5px solid blue";
    document.getElementById("go1").style.boxShadow=" inset 0 -10px 10px -10px #c9c9c9"
    document.getElementById("go2").style.borderLeft="none";
    document.getElementById("go2").style.boxShadow="none";
    document.getElementById("go3").style.borderLeft="none";
    document.getElementById("go3").style.boxShadow="none";
    document.getElementById("go4").style.borderLeft="none";
    document.getElementById("go4").style.boxShadow="none";
    document.getElementById("go5").style.borderLeft="none";
    document.getElementById("go5").style.boxShadow="none";
}

function div2(){

    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";   
    document.getElementById("div3").style.display="block";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";

    document.getElementById("go1").style.backgroundColor="#FBFDFF";
    document.getElementById("go2").style.backgroundColor="white";
    document.getElementById("go3").style.backgroundColor="#FBFDFF";
    document.getElementById("go4").style.backgroundColor="#FBFDFF";
    document.getElementById("go5").style.backgroundColor="#FBFDFF";

    document.getElementById("go2").style.borderLeft="5px solid blue";
    document.getElementById("go2").style.boxShadow=" inset 0 -10px 10px -10px #c9c9c9"
    document.getElementById("go1").style.borderLeft="none";
    document.getElementById("go1").style.boxShadow="none";
    document.getElementById("go3").style.borderLeft="none";
    document.getElementById("go3").style.boxShadow="none";
    document.getElementById("go4").style.borderLeft="none";
    document.getElementById("go4").style.boxShadow="none";
    document.getElementById("go5").style.borderLeft="none";
    document.getElementById("go5").style.boxShadow="none";
}

function div3(){

    document.getElementById("div1").style.display="block";
    document.getElementById("div2").style.display="none";   
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="none";


    document.getElementById("go1").style.backgroundColor="#FBFDFF";
    document.getElementById("go2").style.backgroundColor="#FBFDFF";
    document.getElementById("go3").style.backgroundColor="white";
    document.getElementById("go4").style.backgroundColor="#FBFDFF";
    document.getElementById("go5").style.backgroundColor="#FBFDFF";

    document.getElementById("go3").style.borderLeft="5px solid blue";
    document.getElementById("go3").style.boxShadow=" inset 0 -10px 10px -10px #c9c9c9"
    document.getElementById("go2").style.borderLeft="none";
    document.getElementById("go2").style.boxShadow="none";
    document.getElementById("go1").style.borderLeft="none";
    document.getElementById("go1").style.boxShadow="none";
    document.getElementById("go4").style.borderLeft="none";
    document.getElementById("go4").style.boxShadow="none";
    document.getElementById("go5").style.borderLeft="none";
    document.getElementById("go5").style.boxShadow="none";
}


function div4(){

    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";   
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="block";
    document.getElementById("div5").style.display="none";

    document.getElementById("go1").style.backgroundColor="#FBFDFF";
    document.getElementById("go2").style.backgroundColor="#FBFDFF";
    document.getElementById("go3").style.backgroundColor="#FBFDFF";
    document.getElementById("go4").style.backgroundColor="white";
    document.getElementById("go5").style.backgroundColor="#FBFDFF";

    document.getElementById("go4").style.borderLeft="5px solid blue";
    document.getElementById("go4").style.boxShadow=" inset 0 -10px 10px -10px #c9c9c9"
    document.getElementById("go2").style.borderLeft="none";
    document.getElementById("go2").style.boxShadow="none";
    document.getElementById("go3").style.borderLeft="none";
    document.getElementById("go3").style.boxShadow="none";
    document.getElementById("go1").style.borderLeft="none";
    document.getElementById("go1").style.boxShadow="none";
    document.getElementById("go5").style.borderLeft="none";
    document.getElementById("go5").style.boxShadow="none";
}

function div5(){

    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="none";   
    document.getElementById("div3").style.display="none";
    document.getElementById("div4").style.display="none";
    document.getElementById("div5").style.display="block";

    document.getElementById("go1").style.backgroundColor="#FBFDFF";
    document.getElementById("go2").style.backgroundColor="#FBFDFF";
    document.getElementById("go3").style.backgroundColor="#FBFDFF";
    document.getElementById("go4").style.backgroundColor="#FBFDFF";
    document.getElementById("go5").style.backgroundColor="white";

    document.getElementById("go5").style.borderLeft="5px solid blue";
    document.getElementById("go5").style.boxShadow=" inset 0 -10px 10px -10px #c9c9c9"
    document.getElementById("go2").style.borderLeft="none";
    document.getElementById("go2").style.boxShadow="none";
    document.getElementById("go3").style.borderLeft="none";
    document.getElementById("go3").style.boxShadow="none";
    document.getElementById("go4").style.borderLeft="none";
    document.getElementById("go4").style.boxShadow="none";
    document.getElementById("go1").style.borderLeft="none";
    document.getElementById("go1").style.boxShadow="none";


}
function chaticon(){

    var x = document.getElementById("chats");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}


function navmenu(){

  var x =  document.getElementById("nav-bar");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function submenu(){
  var x =  document.getElementById("submenubar");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
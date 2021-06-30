function getval(val){
    document.getElementById("answer").value=val;  //  console.log(val);
    document.getElementById("topans").value+=val;
}

function soul(){
    var x = document.getElementById("topans").value;
    var y = eval(x);
    document.getElementById("answer").value=y;
    document.getElementById("topans").value=x + "=";

}

function clr(){
    document.getElementById("answer").value = "";
    document.getElementById("topans").value="";
    document.getElementById("answer").value = 0;  

    
}
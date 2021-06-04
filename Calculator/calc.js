function getval(val){
    document.getElementById("answer").value+=val;
}

function soul(){
    var x = document.getElementById("answer").value;
    var y = eval(x);
    document.getElementById("answer").value=y;
}

function clr(){
    document.getElementById("edu").value = "";
}
function getval(val){
document.getElementById("answer").value=val;//console.log(val);
var m = val;//console.log(m);
document.getElementById("topans").value+=val;//console.log(val);
var s = val;//console.log(s);
if(val == "/"){
    alert("division");
}
}

function soul(){
    var x = document.getElementById("topans");   // console.log(x);
    var z = [x.value];
    var g = z.toString;
    var operator=["/,*,+,-,%"];
    console.log(operator);
    for(i=0;i<=g.length;i++){
        console.log(g[i]);

        if (g[i]== operator){
            
            alert("Yes")
    }else{
        alert("no")
    }
}
    var y = eval(x);//    console.log(y);
    document.getElementById("answer").value=y;
    document.getElementById("topans").value=x + "=";

    var splitUp = x.match(/[^\d()]+|[\d.]+/g); console.log(splitUp);
    var filtered=splitUp.filter((a,i)=>i%2===1);  console.log(filtered);  

    for (var i = 0; i < splitUp.length; i++) {
    splitUp.splice(i + 1, 1);
    }    console.log(splitUp);
    var slices = splitUp.slice(0,2); console.log(slices);

    var total=0;
    
    for(var j in slices) { 
        total += Number(slices[j]); console.log(total);
    }


    }

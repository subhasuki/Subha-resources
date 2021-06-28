function calcMth(){

    document.getElementById("month").innerHTML  = '';
    document.getElementById('number').innerHTML = ''; 
    document.getElementById('date').innerHTML = ''; 

    var olddate= document.getElementById("date").value;  //console.log(olddate);

    var oldmonth = document.getElementById("month").value;  // console.log(oldmonth);

    var m = oldmonth-1;

    var months      = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    var monthvalue  = [31,28,31,30,31,30,31,31,30,31,30,31];

    var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday"]; 
    
    var mm = months[m];  // console.log(mm);

    document.getElementById("m").innerHTML = mm + " "  +   "2021"

    if (  (m < 0) || ( m > 11) ) {

        alert("Please enter correct month");
        return false;
        
    }

    var x = document.getElementById("calendar");

    if (x.style.display === "none") {

    x.style.display = "none";  

    x.style.width="";      

    } else {

    x.style.display = "block";

    }

    // var index = [5,6,0,1,2,3,4];

    // var [z,y,x,w,v,u,t] = index;

    // var output = index.map(z => days[z]);  // console.log(output);

    var sum = 0;    

    if(months[m] === "January"){

        totsum = olddate;
        console.log(totsum);
    
    }else{

    for (var i=0;i<oldmonth-1;i++){


    var e = sum += monthvalue[i];  

    }  console.log(e);

    var totsum = Number(e) + 1;  console.log(totsum)
}

    var a = (totsum%7);  console.log(a);

    // var c = output[a];   console.log(c);

    //var d = output.indexOf(c); console.log(d);

    if ( (a === 1) || ( a === 2 )) {

        var res = a + 5;
    }
    else if( (a === 4) || (a === 5) || (a === 7) || (a === 3) || (a === 6)  ){

        var res = a - 2;

    }else if( a === 0){

        var res = a + 5;
    }

    for (var j = 1; j <= monthvalue[m] ; j++) {

        var head = document.createTextNode(j);   // console.log(head);

        var conts  = document.createElement("div");

        var hv = document.createElement("h4");
        
        hv.appendChild(head);

        var finl  = conts.appendChild(hv);       // console.log(finl);

        document.getElementById("number").appendChild(finl);


        if(j == olddate){            
            
            finl.style.backgroundColor = "#088EFA";
            finl.style.padding = "5px 5px";
            finl.style.borderRadius = "2px";
            finl.style.color = "white";
            finl.style.border = "2px solid #CCE9FD";
        }
        
        if ( j === 1 ){

            finl.style.gridColumnStart = res;
        }


    }    

    document.getElementById("month").value  = '';
    document.getElementById("date").value  = '';


}

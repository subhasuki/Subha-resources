function calcMth(){

    document.getElementById("month").innerHTML  = '';
    document.getElementById('number').innerHTML = ''; 

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

    var index = [5,6,0,1,2,3,4];

    // var [z,y,x,w,v,u,t] = index;

    var output = index.map(z => days[z]);  // console.log(output);

    var sum = 0;    
    
    for (var i=0;i<oldmonth-1;i++){


    sum += monthvalue[i];  

    } // console.log(sum);

    var totsum = Number(olddate) + sum; // console.log(totsum)

    var a = ((totsum-1)%7);  console.log(a);
    var c = output[a];   //console.log(c);
    var d = output.indexOf(c); //console.log(d);

    for (var j = 1; j <= monthvalue[m] ; j++) {

        var head = document.createTextNode(j);   // console.log(head);

        var conts  = document.createElement("div");

        var hv = document.createElement("h4");
        
        hv.appendChild(head);

        var finl  = conts.appendChild(hv);       // console.log(finl);

        document.getElementById("number").appendChild(finl);


        if(j === 1 ){                
                
            finl.style.gridColumnStart = d;  // alert(a);
            
            document.getElementById("date").style.backgroundColor = "#088EFA";

            // finl.style.backgroundColor = "#088EFA";

        }
        

        // if(j == 1 && a == 0 && a == 1){                
            
        //     finl.style.gridColumnStart = a+5;  // alert(a);

        // }

        // else if(j == 1 && a == 2){

        //     finl.style.gridColumnStart = a+2; 
        //     // console.log(a);
        // }

        // else if(j === 1  && a == 3){

        //     finl.style.gridColumnStart = a-2; 
        //     // console.log(a);
        // } 

        // else if(j === 1  && a == 5){

        //     finl.style.gridColumnStart = a-3; 
        //     // console.log(a);
        // } 

        // else if( j == "Saturday" || j == "Sunday" ){

        //     finl.style.color = "red";
        // }
    
    }    
    // var colors = ["#ff685d", "#262626", "#262626", "#262626", "#262626", "#262626", "#ff685d"];

    // var text= '';

    // for (var i = 0; i < days.length; i++) { 

    //   text += "<font color='"+colors[i]+"'>"+days[i] +  "</font><br>";

    // }

    // finl.style.gridColumnStart = text; 
    // // console.log(text);

    // document.getElementById("number").value = text;

    document.getElementById("month").value  = '';


}

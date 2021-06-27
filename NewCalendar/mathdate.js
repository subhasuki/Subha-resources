function calcMth(){

        document.getElementById("month").innerHTML  = '';
        document.getElementById('number').innerHTML = ''; 

        var oldmonth = document.getElementById("month").value;  //console.log(oldmonth);

        var m = oldmonth-1;

        var months      = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        var monthvalue  = [31,28,31,30,31,30,31,31,30,31,30,31];

        var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday"];     

        //var mm = months[m]; // console.log(mm);

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

        var output = index.map(z => days[z]);

        // console.log(output);

        var sum = 0;    

        for (var i = 0; i < oldmonth; i++) { 

        sum += monthvalue[i];  

        }
        // console.log(sum);



        if(oldmonth==1 || oldmonth ==3 || oldmonth==5 ||oldmonth == 8|| oldmonth==10 ){

            var a = (((sum-1)%7)-2); // console.log(a);
            var c = output[a];       //console.log(c);

        }

        else if(oldmonth == 2){

            var a = (((sum)%7));      // console.log(a);
            var c = output[a];      // console.log(c);
        }

        else if (oldmonth == 4 ){

            var a = (((sum-1)%7)+6);    // console.log(a);
            var c = output[a];         // console.log(c);

        }

        else if(oldmonth == 7){

            var a = (((sum)%7)+4);    // console.log(a);
            var c = output[a];       // console.log(c);
        }

        else if(oldmonth == 6 || oldmonth == 9 || oldmonth == 11 ){

            var a = (((sum-1)%7)-1);  // console.log(a);
            var c = output[a];  // console.log(c);
        }

        else if (oldmonth == 12 ){

            var a = (((sum-1)%7)+5);   // console.log(a);
            var c = output[a]; // console.log(c);

        }

        // alert(a);

        for (var j = 1; j <= monthvalue[m] ; j++) {

            var head = document.createTextNode(j);   // console.log(head);

            var conts  = document.createElement("div");

            var hv = document.createElement("h4");
            
            hv.appendChild(head);

            var finl  = conts.appendChild(hv);       // console.log(finl);

            document.getElementById("number").appendChild(finl);

            if(j == 1 && a == 0){                
                
                finl.style.gridColumnStart = a+6;  // alert(a);

            }

            else if(j == 1 && a == 1){

                finl.style.gridColumnStart = a+6; 
                // console.log(a);
            }

            else if(j === 1){

                finl.style.gridColumnStart = a-1; 
                // console.log(a);
            } 

            else if( j == "Saturday" || j == "Sunday" ){

                finl.style.color = "red";
            }
        
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

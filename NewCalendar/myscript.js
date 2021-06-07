function calcMth(){

        document.getElementById("month").innerHTML  = '';
        document.getElementById('number').innerHTML = ''; 

        today = new Date();

        cmonth = today.getMonth();

        oldmonth = document.getElementById("month").value;      //   console.log(oldmonth);

        var months      = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        var no = [31,28,31,30,31,30,31,31,30,31,30,31];

        var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday"];     

        var year = 2021;

        var ddate = 1;
         
        var mmth = oldmonth - 1; // console.log(mmth);

        if (  (mmth < 0) || ( mmth > 11) ) {

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
        

        //var  newmonth = nd [mmth]; //  console.log(newm);
             
        //var dd = oldmonth + '/' + ddate + '/' + year ;  //    console.log(dd);

        var hh = new Date(year,mmth,ddate).getDay();

        //var dt = new Date(dd);  
        //console.log(dt);

        //var dayName = days[dt.getDay()];    

        var mms = months[mmth];  //  console.log(mms);

        document.getElementById("m").innerHTML = mms;

        document.getElementById("y").innerHTML = year;


        for (var i = 1; i <= no[mmth] ; i++) {

            var head = document.createTextNode(i);

            var conts  = document.createElement("div");

            var hv = document.createElement("h4");
            
            hv.appendChild(head);

            var finl  = conts.appendChild(hv);
        
            document.getElementById("number").appendChild(finl);

            if( i === 1 ){

                finl.style.gridColumnStart = hh + 1; 
            } 

            if(  (new Date(year,mmth,i).getDay() === 0) || (new Date(year,mmth,i).getDay() === 6 ) ){

                finl.style.color = "red";
            }  
          
        }    


        document.getElementById("month").value  = '';

}

// function clrday(){

//     var days  = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

//     for (var i = 0; i < days.length; i++) {

//         var day = days[i];
    
//         var head = document.createTextNode(day);

//         var conts  = document.createElement("div");

//         var hv    = document.createElement("h4");

//         hv.appendChild(head);

//         var final = conts.appendChild(hv);

        
//         if ( (day === "Sunday") || (day === "Saturday") ) {
    
//             final.style.color = "red";
             
//         }
        
//         document.getElementById("number").appendChild(final);      
//     }
// }
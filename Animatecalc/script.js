var ans = document.getElementById("answer").value; // console.log(ans);
var tans = document.getElementById("topans").value;

function getval(val){

    if(val == 1){
        var b = document.getElementsByTagName("button")[12];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        // tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
               
        
        setTimeout(function() { 
            b.removeChild(clone); 
            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;
        },370)
    }
    else if(val == 2){
        var b = document.getElementsByTagName("button")[13];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        // tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
              
        setTimeout(function() { 
            b.removeChild(clone);
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;
    
            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
         },370)
    }
    else if(val == 3){
        var b = document.getElementsByTagName("button")[14];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        // tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
        
        
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }
    else if(val == 4){
        var b = document.getElementsByTagName("button")[8];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        // tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == 5){
        var b = document.getElementsByTagName("button")[9];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        // tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == 6){
        var b = document.getElementsByTagName("button")[10];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        // tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == 7){
        var b = document.getElementsByTagName("button")[4];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == 8){
        var b = document.getElementsByTagName("button")[5];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == 9){
        var b = document.getElementsByTagName("button")[6];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == 0){
        var b = document.getElementsByTagName("button")[16];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="transparent";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == "/"){
        var b = document.getElementsByTagName("button")[3];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone);
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == "%"){
        var b = document.getElementsByTagName("button")[2];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }

    else if(val == "*"){
        var b = document.getElementsByTagName("button")[7];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }
    else if(val == "-"){
        var b = document.getElementsByTagName("button")[11];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone);
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
         },370)
    }

    else if(val == "+"){
        var b = document.getElementsByTagName("button")[15];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }
    else if(val == "."){
        var b = document.getElementsByTagName("button")[17];    // console.log(b);
        var clone = b.cloneNode(true);       
        clone.classList.add(b.getAttribute("animate"));
        b.appendChild(clone);

        tans= '';        
        clone.style.backgroundColor="black";
        clone.style.color="white";
        clone.style.border="none";
                
        setTimeout(function() { 
            b.removeChild(clone); 
            document.getElementById("answer").value=val;  // console.log(val);
            document.getElementById("topans").value+=val;

            ans += val; // console.log(b.value);
            tans += val; // console.log(b.value);  
        },370)
    }
}


function soul(){

    var x = document.getElementById("topans").value;
    var y = eval(x);
    document.getElementById("answer").value=y;
    document.getElementById("topans").value=x + "=";

    tans.innerHTML = '';
    var noresult = eval(ans.value);
    z = document.getElementById("answer");
    z.classList.add("num-result");
    setTimeout(function(){

    z.classList.remove("num-result")

    },500)
    tans.innerHTML = noresult;
    ans.innerHTML    += y; 

}

function clr(){
    document.getElementById("answer").value = "";
    document.getElementById("topans").value="";
    document.getElementById("answer").value = 0; 
    
    ans.value    = '';
      z = document.getElementById("answer");
      z.classList.add("num-clr");
      z.style.backgroundColor="transparent";
      setTimeout(function(){

            z.classList.remove("num-clr")

      },500)
            tans.innerHTML = 0;      
}
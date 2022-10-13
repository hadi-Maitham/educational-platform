
    function gt()
    {
       var x=document.getElementsByName("q1");
       var y=document.getElementsByName("q2");
       var z=document.getElementsByName("q3");
       var c=document.getElementsByName("q4");
       for( var i=0;i<7;i++){
          if(x[i].checked==true && z[i].checked==true  && y[i].checked==false && c[i].checked==false   ){
            
            // alert("       الاجابة صحيحة     ");
            swal("الاجابة صحيحة", "", "success");
          }
          else if(x[i].checked==true && y[i].checked==true  && z[i].checked==false && c[i].checked==false){
 
         swal("    اقتربت من الاجابة    ");
          }
          else if(x[i].checked==true && c[i].checked==true && y[i].checked==false && z[i].checked==false){
 
          
          swal("    اقتربت من الاجابة    ");
          }
          else if(z[i].checked==true && y[i].checked==true && x[i].checked==false && c[i].checked==false ){
 
          
          swal("    اقتربت من الاجابة    ");
          }
          else if(z[i].checked==true && c[i].checked==true && x[i].checked==false && y[i].checked==false ){
 
          
          swal("    اقتربت من الاجابة    ");
          }
          else if(x[i].checked==true && y[i].checked==true && c[i].checked==true && z[i].checked==false){
              swal("    ابتعدت عن الاجابة  ");
          }
          else if(x[i].checked==false && y[i].checked==true && c[i].checked==true && z[i].checked==true){
            swal("    ابتعدت عن الاجابة  ");
          }
          else if(x[i].checked==true && y[i].checked==false && c[i].checked==true && z[i].checked==true){
            swal("    ابتعدت عن الاجابة  ");
          }
          else if(x[i].checked==true && y[i].checked==true && c[i].checked==false && z[i].checked==true){
            swal("    ابتعدت عن الاجابة  ");
          }

          else if(x[i].checked==true && y[i].checked==true && c[i].checked==true && z[i].checked==true){
              //alert("   الاجابة خطا  ");
              swal("الاجابة خطاء", "", "error"); 
          }
          else if(x[i].checked==true && y[i].checked==false && c[i].checked==false && z[i].checked==false){
             // alert("   الاجابة خطا  ");
             swal("الاجابة خطاء", "", "error"); 
          }
          else if(x[i].checked==false && y[i].checked==true && c[i].checked==false && z[i].checked==false){
             // alert("   الاجابة خطا  ");
             swal("الاجابة خطاء", "", "error"); 
          }
          else if(x[i].checked==false && y[i].checked==false && c[i].checked==true && z[i].checked==false){
             // alert("   الاجابة خطا  ");
             swal("الاجابة خطاء", "", "error"); 
          }
          else if(x[i].checked==false && y[i].checked==false && c[i].checked==false && z[i].checked==true){
             // alert("   الاجابة خطا  ");
             swal("الاجابة خطاء", "", "error"); 
          }
          
          
         
       }
 
    }
    



    function gtn()
    {
       var x1=document.getElementsByName("q5");
       var y1=document.getElementsByName("q6");
       var z1=document.getElementsByName("q7");
       var c1=document.getElementsByName("q9");
       for(i=0;i<7;i++){
         if(x1[i].checked==true && z1[i].checked==true  && y1[i].checked==false && c1[i].checked==false   ){
             alert("       الاجابة صحيحة     ");
          }
          else if(x1[i].checked==true && y1[i].checked==true  && z1[i].checked==false && c1[i].checked==false){
 
          
          alert("    اقتربت من الاجابة    ");
          }
          else if(x1[i].checked==true && c1[i].checked==true && y1[i].checked==false && z1[i].checked==false){
 
          
          alert("    اقتربت من الاجابة    ");
          }
          else if(z1[i].checked==true && y1[i].checked==true && x1[i].checked==false && c1[i].checked==false ){
 
          
          alert("    اقتربت من الاجابة    ");
          }
          else if(z1[i].checked==true && c1[i].checked==true && x1[i].checked==false && y1[i].checked==false ){
 
          
          alert("    اقتربت من الاجابة    ");
          }
          else if(x1[i].checked==true && y1[i].checked==true && c1[i].checked==true && z1[i].checked==false){
              alert("    ابتعدت عن الاجابة  ");
          }
          else if(x1[i].checked==false && y1[i].checked==true && c1[i].checked==true && z1[i].checked==true){
            alert("    ابتعدت عن الاجابة  ");
          }
          else if(x1[i].checked==true && y1[i].checked==false && c1[i].checked==true && z1[i].checked==true){
            alert("    ابتعدت عن الاجابة  ");
          }
          else if(x1[i].checked==true && y1[i].checked==true && c1[i].checked==false && z1[i].checked==true){
            alert("    ابتعدت عن الاجابة  ");
          }

          else if(x1[i].checked==true && y1[i].checked==true && c1[i].checked==true && z1[i].checked==true){
              alert("   الاجابة خطا  ");
          }
          else if(x1[i].checked==true && y1[i].checked==false && c1[i].checked==false && z1[i].checked==false){
              alert("   الاجابة خطا  ");
          }
          else if(x1[i].checked==false && y1[i].checked==true && c1[i].checked==false && z1[i].checked==false){
              alert("   الاجابة خطا  ");
          }
          else if(x1[i].checked==false && y1[i].checked==false && c1[i].checked==true && z1[i].checked==false){
              alert("   الاجابة خطا  ");
          }
          else if(x1[i].checked==false && y1[i].checked==false && c1[i].checked==false && z1[i].checked==true){
              alert("   الاجابة خطا  ");
          }
         
       }
 
    }
 
 
 
 
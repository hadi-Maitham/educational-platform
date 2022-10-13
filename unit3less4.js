
    function gt()
    {
       var x=document.getElementsByName("q1");
       var g=document.getElementsByName("q2");
       for(i=0;i<2;i++){
          if(x[i].checked==true && g[i].checked==false){
         // alert("الاجابة صحيحة");
         swal("الاجابة صحيحة", "", "success");
          //swal("Good job!", "You clicked the button!", "success");
           
          }
          else if(x[i].checked==false && g[i].checked==true) {
           // alert("  الاجابة خطا ");
           swal("الاجابة خطاء", "", "error");
          }
          else{
             // alert("يجب عليك اختيار الجواب");
             swal("يجب عليك اختيار الجواب");
          }
       }
 
    }
 
 function gtn(){
    var y=document.getElementsByName("q4");
    var f=document.getElementsByName("q3");
       for(i=0;i<2;i++){
          if(y[i].checked==true && f[i].checked==false){
           // alert("الاجابة صحيحة");
           swal("الاجابة صحيحة", "", "success");
          
          }
          else  if(y[i].checked==false && f[i].checked==true) {
           // alert("  الاجابة خطا ");
           swal("الاجابة خطاء", "", "error"); 
          }
             else{
              //  alert("يجب عليك اختيار الجواب");
              swal("يجب عليك اختيار الجواب");
             }
       }
 
 }
 
 

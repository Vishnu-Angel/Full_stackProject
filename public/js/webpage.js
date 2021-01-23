var logemail=document.getElementById("email1");
   function validation1()
   {
              var logemail=document.getElementById("email1");
              var errormsg=document.getElementById("error");
             
       const pat1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-])+(?:\.[a-zA-Z0-9-]+)*$/;
       const envelope1=document.getElementById("envelope2");
        if(logemail.value.match(pat1))
        {
            envelope1.style.color="green";
          logemail.style.border="2px solid green";
            logemail.style.boxShadow="0px 0px 5px  green";
           errormsg.innerHTML="";
           errormsg.style.color="green";
       
        }
        else{
            envelope1.style.color="red";
          logemail.style.border="2px solid red";
            logemail.style.boxShadow="0px 0px 5px  red";
           errormsg.innerHTML="Enter the valid Email";
           errormsg.style.color="red";
        }
      }
      var passlog=document.getElementById("logpass");
      var cerror=document.getElementById("error1");
  function showpassword()
  {
        
        if(passlog.type=='password')
         {
          passlog.type='text';
          document.getElementById("hide2").style.display="inline-block";
          document.getElementById("show2").style.display="none";
        } 
        else
        {
        passlog.type='password';
        document.getElementById("hide2").style.display="none";
          document.getElementById("show2").style.display="inline-block";
        }
    }
    function validation2()
    {
        if(passlog.value.match(/[a-z]/g)&&passlog.value.match(/[A-Z]/g)&&passlog.value.match(/[0-9]/g)&&passlog.value.match(/[^a-zA-Z\d]/g)&&passlog.value.length>=8)
        {
          passlog.style.border="2px solid green";
          passlog.style.boxShadow="0px 0px 5px  green";
           cerror.innerHTML="";
           cerror.style.color="green";
           document.getElementById("hide2").style.color="green";
           document.getElementById("show2").style.color="green";
        }
        else
        {
            passlog.style.border="2px solid red";
            passlog.style.boxShadow="0px 0px 5px  red";
            cerror.innerHTML="Enter the valid Password";
            cerror.style.color="red";
            document.getElementById("hide2").style.color="red";
            document.getElementById("show2").style.color="red";
        }
   }
    function finalvalidate()
    {
      valid=true;
        if(document.form2.Email.value=='' && document.form2.Password.value=='')
       {
               alert("Please fill required details ");
               valid=false;
       }
       return valid;
   }

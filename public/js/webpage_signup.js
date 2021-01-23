const input=document.getElementById("name")
var no=document.getElementById("roll");
const eml=document.getElementById("email");
const error=document.getElementById("demo");
const err=document.getElementById("demo2");
const err1=document.getElementById("demo3");
const err2=document.getElementById("demo4");
var password1=document.getElementById("pas1");
var password2=document.getElementById("pas2");
function namecheck()
{
    var letter=/^[A-Za-z]+$/;
      
    if(input.value.match(letter) && input.value.length>=4)
     {
       input.style.border="2px solid green";
       input.style.boxShadow="0px 0px 5px #7FFF00";
        error.innerHTML="";
        error.style.color="green";
        document.getElementById("user-circle").style.color="green";
       }
    else 
     {
         input.style.border="2px solid red";
         input.style.boxShadow="0px 0px 5px  red";
        error.innerHTML="Please enter valid Name and avoid specialcharacters";
        error.style.color="red";
        document.getElementById("user-circle").style.color="red";
      }
}
function rollcheck()
{
    var error1=document.getElementById("demo1");
    if(no.value.length!=4)
     {
       no.style.border="2px solid red";
        no.style.boxShadow="0px 0px 5px  red";
       error1.innerHTML="Please enter 5 digit Rollno";
       error1.style.color="red";
       document.getElementById("id-card").style.color="red";
     }
    else
    {
    no.style.border="2px solid green";
       no.style.boxShadow="0px 0px 5px green";
            error1.innerHTML="";
                error1.style.color="green";
                document.getElementById("id-card").style.color="green";
    }
}
 function emailcheck()
   {
   const pat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-])+(?:\.[a-zA-Z0-9-]+)*$/;
   var envelope=  document.getElementById("envelope");
        if(eml.value.match(pat))
        {
            envelope.style.color="green";
          eml.style.border="2px solid green";
            eml.style.boxShadow="0px 0px 5px  green";
           err.innerHTML="";
           err.style.color="green";
        }
        else{
            envelope.style.color="red";
          eml.style.border="2px solid red";
            eml.style.boxShadow="0px 0px 5px  red";
           err.innerHTML="Enter the valid Email";
           err.style.color="red";
        }
    }
    function passcheck()
    {

        if(password1.value.match(/[a-z]/g)&&password1.value.match(/[A-Z]/g)&&password1.value.match(/[0-9]/g)&&password1.value.match(/[^a-zA-Z\d]/g)&&password1.value.length>=8)
        {
          password1.style.border="2px solid green";
          password1.style.boxShadow="0px 0px 5px  green";
           err1.innerHTML="";
           err1.style.color="green";
           document.getElementById("hide").style.color="green";
          document.getElementById("show").style.color="green";
        }
        else
        {
          password1.style.border="2px solid red";
          password1.style.boxShadow="0px 0px 5px  red";
        err1.innerHTML="Enter 1 special character,letters,1 digit,above 8characters,1 Uppercaseletter";
        err1.style.color="red";
        document.getElementById("hide").style.color="red";
          document.getElementById("show").style.color="red";
        }
    }
    function passcheck2()
    {
          if(password1.value===password2.value)
          {
            err2.innerHTML="";
            password2.style.border="2px solid green";
            password2.style.boxShadow="0px 0px 5px  green"; 
            document.getElementById("hide1").style.color="green";
           document.getElementById("show1").style.color="green";
          }
          else 
          {
            err2.innerHTML="Kindly provide correct Password";
            password2.style.border="2px solid red";
            password2.style.boxShadow="0px 0px 5px  red";
            err2.style.color="red";
            document.getElementById("hide1").style.color="red";
             document.getElementById("show1").style.color="red";
         } 
    } 
   var gen1=document.getElementById(gen);
   function finalsignup()
   {
       valid=true;
   if(document.form1.Name1.value=='' && document.form1.Roll_No1.value=='' && document.form1.Email1.value=='' && document.form1.Password1.value=='' && document.form1.Password2.value=='')
       {
        alert("Please provide the required information");
        valid=false;
       }
       return valid;
   }
   
   function myfunction1()
   {
    
   var pass1=document.getElementById("pas2");
        if(pass1.type=='password')
     {
          pass1.type='text';
          document.getElementById("hide1").style.display="inline-block";
          document.getElementById("show1").style.display="none";
          
        } 
        else
        {
        pass1.type='password';
        document.getElementById("hide1").style.display="none";
          document.getElementById("show1").style.display="inline-block";
        }
   }
   function myfunction()
   {
   var pass=document.getElementById("pas1");
        if(pass.type=='password')
     {
          pass.type='text';
          document.getElementById("hide").style.display="inline-block";
          document.getElementById("show").style.display="none";
        } 
        else
        {
        pass.type='password';
        document.getElementById("hide").style.display="none";
          document.getElementById("show").style.display="inline-block";
        }
      }
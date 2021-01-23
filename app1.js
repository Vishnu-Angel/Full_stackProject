var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var connection=require('./model/database');
app.use(bodyParser.urlencoded({extended:false}));
  app.use(express.static(__dirname));

   app.get('/student',function(req,res)
   {
          console.log("Hello");
    res.sendFile(__dirname+'/views/webpage.html');

    })
    app.post('/validate',function(req,res)
     {
    var email=req.body.Email;
     var pwd=req.body.Password;
     connection.query('select user_email from student_details where  user_email like ?',[email],(err,results)=>
     {
         if(err) throw err;
         if(results)
         {
             connection.query('select User_password from student_details where user_email like ? and User_password like ?)',[email,pwd],(err,ans)=>
             {
                 if(ans)
                 {
                    console.log("Valid data ");
                     res.send(`<h2>Successful Login</h2><h3>User name: ${email} , Password: ${pwd}</h3>`);
                  }
                  else
                  {
                     console.log("Invalid data");
                      res.send("<h2 style='color:green;text-align:center'>Invalid Data</h2> <h2 style='color:violet;text-align:center'>Signup to continue</h2>");
                  }

             })
         }
     })
      
      })
      app.get('/signup',function(req,res)
       {
           console.log("welcome");
        res.sendFile(__dirname+'/views/webpage_signup.html');
       })
app.use('/signupValidate',function(req,res)
{
    console.log('Data is validated');
    var username=req.body.Name1;
    var email=req.body.Email1;
    var roll=req.body.Roll_No1;
    var pwd=req.body.Password1;
    var gender=req.body.gender;
    connection.query('insert into student_details values(?,?,?,?,?)',[username,email,roll,pwd,gender],(err,results)=>
    {
        if(err) throw err;
        if(results)
        {
            console.log("values inserted");
            res.send(`<h2>Welcome ...</h2><h3>New User: ${username} , Email: ${email} , RollNo: ${roll} ,
            Password: ${pwd}Gender: ${gender}</h3>`);
        }
    })
   
})
 app.use(function(req,res)
{
    var url=req.body.url;
    res.sendFile(__dirname+'/views/404page.html');
});
app.listen(1102,()=>
{
    console.log("Server is listening 1102");
})


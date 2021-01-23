const mysql=require('mysql');
const connection=mysql.createConnection({
     host: 'localhost',
    user: 'root',
    password: 'Vishnu',
    database:'admin',
});
module.exports=connection;
// con.connect(function(err)
// {
//     if(err) 
//     console.log(err);
//     else
//     console.log("Connected");
// })

const mysql=require('mysql2');
const mysql1={
    host:'localhost',
    user:'root',
    password:'abishek.t123',
    database:'bicycleinformation'
}

const connection1=mysql.createConnection(mysql1);

connection1.connect((err)=>
{
    if(err)
    {
        console.log("Error");
    }
    else
    {
        console.log("connnected successfully");
    }
})
module.exports={connection1};



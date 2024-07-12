const express=require('express')
const mysql=require('mysql2')
const app=express()
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'portfolio'
})
db.connect(function(error){
    if(error){
        console.log("connection unsuccessfull");
    }
    else{
        console.log("connection successfull")
    }
})
app.get('/get_users',function(req,res){
    db.query('select * from email',function(err,result){
        res.json(result);
    })
})
app.listen(8084)
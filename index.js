const express=require('express');

const app=express()


app.listen(5000,()=>{
    console.log("Servers started on the given port.")
})

app.get('/',(req,res)=>{
    res.send('<h1>Hello succesfull</h1>')
})


const express=require('express');

const app=express()
const products_route=require('./routes/products.js')

app.use(express.json())

app.listen(5000,()=>{
    console.log("Servers started on the given port.")
})

app.get('/',(req,res)=>{
    res.send('<h1>Hello succesfull</h1>')
})

//middleware or to set router

app.use("/api/products",products_route)
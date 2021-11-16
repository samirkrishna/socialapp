const express = require('express')
const app = express()
const formatter = require('date-format')

const PORT = process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.status(200).send("hello get")
})

app.get("/api/v1/instagram",(req,res)=>{
    const instaSocial = {
       username:"samir@insta.com",
       followers:"200",
       follows:"40",
       date:formatter("hh:mm:ss.SSS",new Date())
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/linkedin",(req,res)=>{
    const linkedinSocial = {
       username:"samir@linkedin.com",
       followers:"100",
       follows:"42",
       date:formatter("hh:mm:ss.SSS",new Date())
    }
    res.status(200).json(linkedinSocial)
})

app.get("/api/v1/facebook",(req,res)=>{
    const fbSocial = {
       username:"samir@fb.com",
       followers:"370",
       follows:"987",
       date:formatter("MM/dd/yyyy",new Date())
    }
    res.status(200).json(fbSocial)
})

app.get("/api/v1/:id/",(req,res)=>{
    console.log(req.params.id);
    res.status(200).send({params:req.params.id})
})

app.listen(PORT,()=>{
    console.log(`Server is up and Running at ${PORT}`);
})
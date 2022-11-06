
const express=require("express")

require("dotenv").config()

const PORT=process.env.PORT || 8500
const app=express()

app.get("/",(req,res)=>{
    res.send("welcome to Backend Deployment")

})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} `)
})
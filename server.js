const express=require('express')

const app=express()

const PORT=process.env.PORT || 3002

//webserver
app.use(express.static("frontend"))

app.listen(PORT,function(){
    console.log("successfully running at http://localhost:"+PORT)
})

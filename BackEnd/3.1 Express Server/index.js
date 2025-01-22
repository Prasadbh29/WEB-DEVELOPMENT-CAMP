import express from "express"
const app=express();


app.get('/',(request,response)=>{
    response.send("Hello Master")
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});



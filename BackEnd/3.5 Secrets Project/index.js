//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import {dirname} from 'path'
import { fileURLToPath } from "url";
import express from 'express'
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();

const port=3000;
var isAuthorized=false

app.use(bodyParser.urlencoded({urlencoded:true}))

function passwordCheck(req,res,next)
{
    if(req.body['password']==='ILoveProgramming')
    {
        isAuthorized=true
    }
next()
}
app.use(passwordCheck)
 

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/check',(req,res)=>{
if(isAuthorized)
{
    res.sendFile(__dirname+"/public/secret.html")
}
else{
    res.sendFile(__dirname+'/public/index.html')
}
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
} )
import express from 'express'
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
app.post('/register',(req,res)=>{
    res.sendStatus(201)    
})

app.put('/user/prasad',(req,res)=>{
    res.sendStatus(200)
})

app.patch('/',(req,res)=>{
    res.sendStatus(200)    
})
app.delete('/',(req,res)=>{
    res.sendStatus(200)
})
app.listen(3000,()=>{
    console.log(`Server is running on ${PORT}`);
    
})


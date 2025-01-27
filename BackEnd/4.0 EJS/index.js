import express from 'express'
const port=3000

const app=express()

app.get('/',(req,res)=>{
    const today=new Date()
    const day=today.getDay()
    var Type="a Weekday"
    var adv="it's time to work hard"

        if(day===0 || day===6)
        {
              Type="a Weekend"
              adv="it's time to have some fun"
        }

    res.render("index.ejs",{
        dayType:Type,
        advice:adv
    });
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
    
})
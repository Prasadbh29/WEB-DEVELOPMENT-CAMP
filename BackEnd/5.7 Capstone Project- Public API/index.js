import express from 'express'
import axios from 'axios'
const app=express()
const PORT=3000
const API_URL='https://v2.jokeapi.dev/joke'

app.use(express.static('public'))

app.get('/',async(req,res)=>{

    try{
        const response=await axios.get(`${API_URL}/Dark`)
        res.render('index.ejs',{setup:response.data.setup,delivery:response.data.delivery})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send('Ummm Server Failed😐')
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

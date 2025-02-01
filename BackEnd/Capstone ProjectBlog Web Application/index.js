import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app=express()


app.set("view engine", "ejs");
app.set("views", path.join( "views"));

app.use(bodyParser.urlencoded({urlencoded:true}))
app.get('/',(req,res)=>{
    res.render('index.ejs')
})


app.get("/view", (req, res) => {
    res.render("view");
});





app.post('/submit',(req,res)=>{
    const title=req.body['title']
    const description=req.body['description']

    res.render('view.ejs',{title:title,description:description})

})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
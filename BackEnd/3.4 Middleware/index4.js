import express from "express";
import {dirname} from 'path'
import { fileURLToPath} from "url";
import bodyParser from "body-parser";

const _dirname=dirname(fileURLToPath(import.meta.url))
var bandName=""
const app = express();
const port = 3000;
var bandName=""




app.use(bodyParser.urlencoded({urlencoded:true}))


app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post('/submit',(req,res)=>{
  res.send("<h1>Your Bandname is:</h1><h2>"+req.body.street+req.body.pet+"🖖</h2> ");
  
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

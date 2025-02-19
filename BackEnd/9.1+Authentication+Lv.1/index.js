import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const db = new pg.Client({
user:'postgres',
host:'localhost',
database:'secrets',
password:'2004',
port:5432
})
db.connect();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
const email=req.body.username;
const password=req.body.password;

try{
      const check=await db.query('select * from users where email=$1',[email])
      if(check.rows.length>0)
      {
        res.send('Email already exist, try logging in.')
      }
      else{
        await db.query('insert into users(email,password) VALUES($1,$2)',[email,password])
        res.render('secrets.ejs')
      }
}
catch(err)
{
  console.log(err)
}

  
});

app.post("/login", async (req, res) => {
    const email=req.body.username;
    const password=req.body.password;

    try{
       const check=await db.query('select * from users where email=$1',[email])

       if(check.rows.length>0)
       {
          const result=await db.query('select (password) from users where email=$1',[email])
          const user=result.rows[0];
          const enteredPassword=user.password
          if(password === enteredPassword)
          {
            res.render('secrets.ejs')
          }
          else{
            res.send('Incorrect password')
          }
       }
       else{
        res.send('User not exits,try register user')
       }
    }
    catch(err)
    {
      console.log(err)
    }
    
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

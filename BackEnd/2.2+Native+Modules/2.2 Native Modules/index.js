
//to write a file using fs
message="A Quick Brown Fox Jumps Over a Lazy Dog";
 const fs= require("fs");
fs.writeFile("message.txt",message,function(err){
    if(err) throw err;

    console.log("1.File is Created");
})

//to read from File
fs.readFile("message.txt","utf8",(err,data)=>{
if(err) throw err;

    console.log("2.File Contains: "+data)
});
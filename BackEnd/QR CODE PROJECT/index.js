// 1. Use the inquirer npm package to get user input.

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer.prompt([
    {
        "type":"input",
        "name":"URL",
        "message":"Enter the text you want to convert to QR code: "
    }
]).then((answers)=>{
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.

    console.log(answers);
    var qr_png=qr.image(answers.URL,{type:"png"});
    qr_png.pipe(fs.createWriteStream("QR.png"));
    console.log("QR code generated successfully");

    // 3. Create a txt file to save the user input using the native fs node module.

    fs.writeFile("URL.txt",answers.URL,(err)=>{
        if (err) throw err;
        console.log("URL saved Successfully")
    })

})
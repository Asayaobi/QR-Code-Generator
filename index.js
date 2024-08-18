import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'

//Use the inquirer npm package to get user input.
inquirer.prompt([
    {
        name: 'website',
        message: 'Please enter your website',
        type: 'input'
       }])
      .then(function(answer){
        console.log(answer) //{ website: 'www.xxxxx.com' }

//Use qr-image turn the answer into qr code
        let qr_image = qr.image(answer.website, { type: "png" })
//Save the QR Code Image
        qr_image.pipe(fs.createWriteStream(`${answer.website}_qr_code.png`))
    })


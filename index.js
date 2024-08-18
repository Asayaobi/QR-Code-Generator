import inquirer from 'inquirer'
import qr from 'qr-image'

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
    })


import inquirer from 'inquirer'


//Use the inquirer npm package to get user input.
inquirer.prompt([
    {
        name: 'website',
        message: 'Please enter your website',
        type: 'input'
       }])
      .then(function(answer){
        console.log(answer) //{ website: 'www.xxxxx.com' }
      })

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL to generate a QR code:'
    }
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(answers.url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));


    fs.writeFile("URL.txt", url, (err) => {
          if (err) throw err;
          console.log("The file has been saved!");
        });
 
  })
  .catch((error) => {
    if (error.isTtyError) {
     

    } else {
      // Something else went wrong
    }
  });
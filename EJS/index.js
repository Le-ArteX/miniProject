import express from 'express';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  
    const data = { 
        title: 'EJS tag', 
        seconds: new Date().getSeconds(),
        items : ['apple', 'banana', 'orange', 'mango'],
        htmlContent: '<strong>This is ejs testing</strong>'
     };

     res.render("index.ejs", data);

})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
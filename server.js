const puppeteer = require('puppeteer');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.port || 5000;

// Routes 
app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/users'));


app.listen(PORT, console.log(`Server started on port ${PORT}`));

// async function run() {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
  
//   const proxy = 'https://proxybot.io/api/v1/AQTvV70KEX04CNkqkfTIoeHYm853?url=http://httpbin.org/ip';
//   const pageUrl = 'https://whatismyipaddress.com/';
  

//   await page.goto(pageUrl);
// }

// run();
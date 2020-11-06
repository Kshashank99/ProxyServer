const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  const proxy = 'https://proxybot.io/api/v1/AQTvV70KEX04CNkqkfTIoeHYm853?url=http://httpbin.org/ip';
  const pageUrl = '{$proxy}https://whatismyipaddress.com/';
  

  await page.goto(pageUrl);
}

run();
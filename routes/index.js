const express = require('express');
const puppeteer = require('puppeteer');
const router = express.Router();
// Welcome page
router.get('/', (req, res) => res.render('layout', {}));

router.post('/', (req, res) => {
    const data = req.body
    res.render('layout',data)
});

router.post('/dashboard', (req, res) => {
    async function run() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        
        const proxy = 'https://proxybot.io/api/v1/AQTvV70KEX04CNkqkfTIoeHYm853?url=http://httpbin.org/ip';
        const pageUrl = `${proxy}${req.body.fname}`;

        
        
        
        await page.goto(pageUrl);
    }
    
    run();
    res.render('data',  {
        name: req.body.name
    })
});

module.exports = router;
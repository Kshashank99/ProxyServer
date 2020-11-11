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
        
        // const proxy = 'https://proxybot.io/api/v1/API_KEY?url=http://httpbin.org/ip';
        const proxy = 'https://proxybot.io/api/v1/ORgUyg0s9ZZG4plVv26kN0gEI3m1?url=';
        const pageUrl = `${proxy}${req.body.fname}`;
        // const pageUrl = `${proxy}${req.body.fname}`;

        
        
        
        await page.goto(pageUrl);
    }
    
    run();
    res.render('data',  {
        name: req.body.name
    })
});

module.exports = router;
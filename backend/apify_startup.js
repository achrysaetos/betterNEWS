const scraper = require("./apify_scraper/scraper")
const cron = require('node-cron');

scraper.scrapeHackerNews()
// cron.schedule('* * * * *', () => {
//   console.log("szzz")
//   scraper.scrapeHackerNews()
// })

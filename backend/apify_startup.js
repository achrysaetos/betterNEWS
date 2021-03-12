const scrapeHackerNews = require("./apify_scraper/scrapeHackerNews");
const scrapeTechCrunch = require("./apify_scraper/scrapeTechCrunch");
const cron = require("node-cron");
const fs = require("fs").promises;

fs.rmdir("./apify_output", { recursive: true })
  .then(() => fs.mkdir("./apify_output"))
  .then(() => scrapeHackerNews.scrapeHackerNews())
  //.then(() => scrapeTechCrunch.scrapeTechCrunch());

// cron.schedule('* * * * *', () => {
//   console.log("szzz")
//   scraper.scrapeHackerNews()
// })

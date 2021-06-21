
const scrapeHackerNews = require("./apify_scraper/scrapeHackerNews");
const fs = require("fs").promises;
// const cron = require("node-cron");

fs.rmdir("./apify_output", { recursive: true })
  .then(() => fs.mkdir("./apify_output"))
  .then(() => scrapeHackerNews.scrapeHackerNews())

// cron.schedule('* * * * *', () => {
//   console.log("szzz")
//   scraper.scrapeHackerNews()
// })

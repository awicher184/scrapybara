import { scrape } from "./scraper/cve-org.js";

const cveRecords = await scrape()
console.log(cveRecords)

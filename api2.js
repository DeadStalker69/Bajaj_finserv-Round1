const axios = require("axios");

const url =
  "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks";
const rollNumber = "2110994829";
const company = "Bajaj Finserv Ltd";
const currentPrice = 1577.0;
const accountNumber = "BFHL0018634";
const githubRepoLink =
  "https://github.com/DeadStalker69/Bajaj_finserv-Round1.git";

const headers = {
  "content-type": "application/json",
  "bfhl-auth": rollNumber,
};

const data = {
  company,
  currentPrice,
  accountNumber,
  githubRepoLink,
};

axios
  .post(url, data, { headers })
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

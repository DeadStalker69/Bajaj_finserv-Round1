const axios = require("axios");

const url =
  "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount";

const data = {
  name: "Prabhat Goyal",
  email: "prabhat4829.be21@chitkara.edu.in",
  rollNumber: 2110994829,
  phone: 6284113273,
};

async function makeReq() {
  try {
    const response = await axios.post(url, data);
    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

makeReq();

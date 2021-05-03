const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.BIBLE_API_URL,
  header: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  },
});

module.exports = axiosInstance;

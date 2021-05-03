require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { urlencoded, json } = require("express");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static(__dirname));
app.use("/api", require("./routes/api"));

app.listen(port, () => {
  console.log(`Products server listening on port ${port}`);
});

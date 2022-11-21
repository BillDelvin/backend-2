const express = require("express");
const { createServer } = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./routes");

const PORT = 8000;
const app = express();
const server = createServer(app);

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public"))); // mengizinkan untuk mengakses ke directory images

app.use(api); // Calling our API

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

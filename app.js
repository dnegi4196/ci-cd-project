const http = require("http");
const fs = require("fs");
const os = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/info") {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        hostname: os.hostname(),
        uptime: process.uptime(),
        platform: os.platform(),
        time: new Date(),
      })
    );
  } else {
    fs.readFile("./public/index.html", (err, data) => {
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});







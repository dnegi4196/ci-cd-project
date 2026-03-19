const http = require("http");
const fs = require("fs");
const os = require("os");

const server = http.createServer((req, res) => {

  if (req.url === "/api/info") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      hostname: os.hostname(),
      uptime: process.uptime(),
      platform: os.platform(),
      time: new Date()
    }));
  }

  else if (req.url === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }

  else {
    res.writeHead(404);
    res.end("Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

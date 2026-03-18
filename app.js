const http = require("http");
const os = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Home route
  if (req.url === "/") {
    res.end(
      JSON.stringify({
        message: "Welcome to CI/CD App 🚀",
        status: "Running",
      })
    );
  }

  // Health check route
  else if (req.url === "/health") {
    res.end(
      JSON.stringify({
        status: "OK",
        uptime: process.uptime(),
      })
    );
  }

  // System info route
  else if (req.url === "/info") {
    res.end(
      JSON.stringify({
        hostname: os.hostname(),
        platform: os.platform(),
        cpu: os.cpus().length,
        memory: os.totalmem(),
      })
    );
  }

  // Time route
  else if (req.url === "/time") {
    res.end(
      JSON.stringify({
        currentTime: new Date(),
      })
    );
  }

  // Not found route
  else {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        error: "Route not found ❌",
      })
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







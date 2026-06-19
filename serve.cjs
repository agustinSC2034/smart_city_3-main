const http = require("http");
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "dist");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let filePath = path.join(dist, req.url === "/" ? "/index.html" : req.url);
  const ext = path.extname(filePath);

  // SPA fallback: if the file doesn't exist and it's not an asset, serve index.html
  if (!fs.existsSync(filePath) && !ext) {
    filePath = path.join(dist, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  const contentType = mime[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

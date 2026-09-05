// Tiny local preview server. This file is not needed on GitHub Pages.
const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.xml': 'application/xml', '.txt': 'text/plain', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

http.createServer((request, response) => {
  const safePath = path.normalize(decodeURIComponent(request.url.split('?')[0])).replace(/^(?:\.\.[/\\])+/, '');
  const filePath = path.join(root, safePath === '/' ? 'index.html' : safePath);
  if (!filePath.startsWith(root)) { response.writeHead(403); response.end('Forbidden'); return; }
  fs.readFile(filePath, (error, data) => {
    if (error) { response.writeHead(error.code === 'ENOENT' ? 404 : 500); response.end(error.code === 'ENOENT' ? 'Not found' : 'Server error'); return; }
    response.writeHead(200, { 'Content-Type': `${types[path.extname(filePath)] || 'application/octet-stream'}; charset=utf-8` }); response.end(data);
  });
}).listen(8000, () => console.log('TechSeekho preview: http://localhost:8000'));

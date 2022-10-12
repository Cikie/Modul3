const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const {parse} = require("qs");
// you can pass the parameter in the command line. e.g. node static_server.js 3000
const port = process.argv[2] || 9000;


// maps file extention to MIME types
const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.zip': 'application/zip',
    '.doc': 'application/msword',
    '.eot': 'application/vnd.ms-fontobject',
    '.ttf': 'application/x-font-ttf',}

http.createServer(function (req, res){
    console.log(`${req.method} ${req.url}`);
    const parseUrl = url.parse(req.url);
    const sanitizePath = path.normalize(parseUrl.pathname).replace(/^(\.\.[\/\\])+/, '')

    let pathname = path.join(__dirname,sanitizePath);

    fs.exists(pathname,function (exist){
        if (!exist  ){
            res.statusCode = 404;
            res.end(`File ${pathname} not found!!`)
            return
        }
        if (fs.statSync(pathname).isDirectory()){
            pathname += '/registerUpload.html'
        }
        fs.readFile(pathname,function (err,data){
            if (err){
                res.statusCode = 500;
                res.end(`Error getting file ${err}.`)
            }else {
                const ext = path.parse(pathname).ext;
                res.setHeader(mimeType[ext]||'text/plain');
                res.end(data)
            }
        })
    })
}).listen(parseInt(port));
console.log(`Sever listening on port ${port}`)
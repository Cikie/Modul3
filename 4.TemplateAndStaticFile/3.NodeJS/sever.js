const http = require('http');
const fs = require('fs');

let sever = http.createServer(((req, res) => {
    fs.readFile('./registerUpload.html', 'utf-8', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}));
sever.listen('8080', function () {
    console.log(`Sever is running on local Host 8080 !!`)
});
const http = require('http');
const fs = require('fs');
const qs = require('qs');

let sever = http.createServer(((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./register.html', "utf-8", function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end()
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            console.log(qs.parse(data));
            return res.end('Register Success !!')
        })
        req.on('error', () => {
            console.log('Error')
        })
    }
}));
sever.listen(3000, function () {
    console.log('Sever is Running!! ')
})
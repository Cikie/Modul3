const http = require('http');
const fs = require('fs');
const qs = require('qs');

const sever = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./register.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on("end", () => {
            const userInfo = qs.parse(data);
            fs.readFile('./infoHTML.html', 'utf-8', function (err, datahtml) {
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{Name}', userInfo.name);
                datahtml = datahtml.replace('{Email}', userInfo.email);
                datahtml = datahtml.replace('{Password}', userInfo.password);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(datahtml);
                return res.end();
            });
        });
        req.on('error', () => {
            console.log('error')
        })
    }
});
sever.listen(8080, function () {
    console.log('Sever is running at LoCalHost 8080')
});
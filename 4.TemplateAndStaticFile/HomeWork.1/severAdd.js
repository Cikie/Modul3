const http = require('http');
const fs = require('fs');
const qs = require('qs');

const sever = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./default.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            const userInfo = qs.parse(data);
            console.log(data);
            fs.readFile('./users.html', "utf-8", function (err, data) {
                if (err) {
                    console.log(err.message)
                }
                data = data.replace('{Name}', userInfo.name);
                data = data.replace('{Email}', userInfo.email);
                data = data.replace('{Phone}', userInfo.phone);
                data = data.replace('{Address}', userInfo.address);
                data = data.replace('{Date}', userInfo.date);
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data);
                return res.end()
            })
        })
        req.on('error', () => {
            console.log('Error')
        })
    }
})
sever.listen(8080, function () {
        console.log('Sever is running!!')
    }
)
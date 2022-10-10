const http = require('http');
const fs = require('fs');
const qs = require('qs');

const sever = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./display.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            console.log(data)
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            const todoInfo = qs.parse(data);
            fs.readFile('./todo.html', 'utf-8', function (err, dataTodo) {
                if (err) {
                    console.log(err)
                }
                dataTodo = dataTodo.replace('{Job}', todoInfo.job);
                dataTodo = dataTodo.replace('{Clean}', todoInfo.clean);
                dataTodo = dataTodo.replace('{Disk}', todoInfo.disk);
                dataTodo = dataTodo.replace('{Cooking}', todoInfo.cooking);
                dataTodo = dataTodo.replace('{HomeWork}', todoInfo.homeWork);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(dataTodo);
                return res.end();
            })
        })
        req.on('error', () => {
            console.log('error')
        })
    }
})
sever.listen(3000, function () {
    console.log('Doing Job')
})
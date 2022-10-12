const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

sever = http.createServer(function (req, res) {
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', function (data) {
        buffer += decoder.write(data)
    });
    req.on('end', function (end) {
        buffer += decoder.end();
        res.end('Hello NodeJS !!')
        console.log(buffer)
    });
});
sever.listen(3000, function () {
    console.log('Sever is Running !!')
})
const http = require('http');
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder

let sever = http.createServer(function (req, res){
    let parseUrl = url.parse(req.url,true);
    let queryStringObject = parseUrl.query
    res.end('Hello NodeJS')
    console.log(queryStringObject)
    }
);
sever.listen(3000,function (){
    console.log('Sever is running!!')
})
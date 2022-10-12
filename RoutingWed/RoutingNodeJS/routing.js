const http = require('http');
const url = require('url');
const fs = require('fs');

const sever = http.createServer((req, res) => {
    let parseUrl = url.parse(req.url, true);
    let pathName = parseUrl.pathname;
    let trimPath = pathName.replace(/^\/+|\/+$/g, '');

    let chosenHandler;
    if (typeof router[trimPath] === "undefined") {
        chosenHandler = handler.notFound;
    } else {
        chosenHandler = router[trimPath];
    }
    chosenHandler(req,res);

});
sever.listen(3000, function () {
    console.log('Sever is Running !!')
});
let handler = {};

let getTemplate = (req, res, path) => {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.log(err.message);
        }
        res.writeHead(200, "text/html");
        res.write(data);
        res.end();
    })
}
handler.home = (req, res) => {
    getTemplate(req, res, 'index.html')
}
handler.notFound = (req, res) => {
    getTemplate(req, res, 'notFound.html')
}
handler.css = (req, res) => {
    fs.readFile('index.css', "utf-8", (err, data) => {
        if (err) {
            console.log(err.message);
        }
        res.writeHead(200, 'text/css');
        res.write(data);
        res.end();
    })
}

let router = {
    'login': handler.login,
    'home': handler.home,
    'index.css': handler.css
}
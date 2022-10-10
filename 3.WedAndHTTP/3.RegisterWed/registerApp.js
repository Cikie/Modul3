const http = require('http');

http.createServer(function (req, res) {
        let txt = "";
        if (req.url ==='/login'){
            txt = 'Login success'
        }else {
            txt = 'Login Fail'
        }
        res.end(txt);
}).listen(3000,'localhost')
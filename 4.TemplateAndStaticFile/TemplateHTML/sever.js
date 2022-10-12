const http = require('http');
const fs = require('fs');

let sever = http.createServer(((req, res)=>{
    fs.readFile ('./registerUpload.html',"utf-8" , function (err,data){
        if (err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        let username = 'Admin';
        data = data.replace('{username}',username)

        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
    })
}));
sever.listen(3000,function (){
    console.log(`Sever is Running !!`)
    }
)
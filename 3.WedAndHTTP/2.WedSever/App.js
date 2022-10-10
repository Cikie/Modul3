const http = require('http');
const sever = http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>')
    res.end();
})

sever.listen(3000,'localhost',()=>{
    console.log('server is running in port 3000')
    }
)
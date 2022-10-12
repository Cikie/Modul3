const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    // fs.readFile(__dirname + '/data.txt', (err, data) => {
    //     res.end(data)
    // })
    const stream = fs.createReadStream(__dirname + '/data.txt')
    stream.pipe(res)
})
server.listen(3000)
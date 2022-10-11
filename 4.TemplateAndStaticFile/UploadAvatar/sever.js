let http = require('http');
let fs = require('fs');
let formidable = require('formidable');

let users = [];

let sever = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./registerUpload.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });

    } else {
        let form = new formidable.IncomingForm();
        form.uploadDir = "upload/";
        form.parse(req, function (err, fields, files) {
            let userInfo = {
                name: fields.name,
                email: fields.email,
                password: fields.password,
                date: fields.date
            };
            if (err) {
                console.log(err.message);
                return res.end(err.message);
            }
            console.log(files)
            let tmpPath = files.avatar.filepath;
            let newPath = form.uploadDir + files.avatar.originalFilename;
            userInfo.avatar = newPath;
            fs.rename(tmpPath, newPath, (err) => {
                if (err) throw err;
                let fileType = files.avatar.mimeType;
                let mimeTypes = ["image/jpeg", "image/jpg", "image/png"];
                if (mimeTypes.indexOf(fileType) === -1) {
                    res.writeHead(200, {"Content-Type": "text/html"});
                    return res.end('File is not in the Correct Format');
                }
            });
            users.push(userInfo);
            console.log(users)
            return res.end('Register Success !!')
        });
    }
});
sever.listen(8080, function () {
    console.log('Sever is Running!!');
});
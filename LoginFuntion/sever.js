const http = require('http');
const fs = require('fs');
const qs = require('qs');
const url = require('url');

const sever = http.createServer((req, res) => {
    let urlParse = url.parse(req.url, true);
    let pathName = urlParse.pathname; // tra ve Home
    let arrPath = pathName.split('/');
    let trimPath = arrPath[1];

    let chosenHandle;
    if (typeof router[trimPath] === 'undefined') {
        chosenHandle = handlers.notFound;
    } else {
        chosenHandle = router[trimPath]
    }
    chosenHandle(req, res, arrPath[2])

});

let handlers = {};

handlers.login = function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./view/login.html', "utf-8", (err, data) => {
            res.writeHead(200, 'text/html')
            res.write(data);
            return res.end();
        });
    } else {
        let dataLogin = ''
        req.on('data', chunk => {
            dataLogin += chunk;
        })
        req.on('end', () => {
            let usersLogin = [];
            const usersData = qs.parse(dataLogin);
            fs.readFile('./local/local.json', "utf-8", (err, data) => {
                usersLogin = JSON.parse(data);
                for (let i = 0; i < usersLogin.length; i++) {
                    if (usersLogin[i].name == usersData.name && usersLogin[i].password == usersData.password) {
                        console.log("Login Success !!")
                        fs.readFile('./view/home.html', "utf-8", (err, dataHTML) => {
                            res.writeHead(200, 'text/html');
                            dataHTML = dataHTML.replace('{users}', usersData.name)
                            res.write(dataHTML);
                            res.end();
                        })
                    } else {
                        console.log("Login Fail !!")
                        fs.readFile('./view/login.html', "utf-8", (err, data) => {
                            res.writeHead(200, 'text/html')
                            res.write(data);
                            res.end();
                        })
                    }
                }
            })
        })
    }
};

handlers.home = function (req, res) {
    let userHtml = '';
    fs.readFile('./local/local.json', "utf-8", (err, users) => {
        users = JSON.parse(users);
        users.forEach((item, index) => {
            userHtml += `${index + 1}: Người dùng: ${item.name}, Mật Khẩu: ${item.password}| <a href="edit/${index}" >Sửa</a> | <a href="delete/${index}">Xóa</a><br>`
        });
        fs.readFile('./view/home.html', "utf-8", (err, indexHtml) => {
            res.writeHead(200, 'text/html');
            indexHtml = indexHtml.replace('{users}', userHtml);
            res.write(indexHtml);
            res.end();
        });

    });
};

handlers.notFound = function (req, res) {
    fs.readFile('./view/notFound.html', "utf-8", (err, data) => {
        res.writeHead(200, 'text/html')
        res.write(data);
        res.end();
    })
};

handlers.register = function (req, res) {
    if (req.method === "GET") {
        fs.readFile('./view/register.html', "utf-8", (err, data) => {
            res.writeHead(200, "text/html");
            res.write(data);
            res.end();
        });
    } else {
        let data = ''
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let users = [];
            const userInfo = qs.parse(data);
            fs.readFile('./local/local.json', "utf-8", (err, localJson) => {
                users = JSON.parse(localJson);
                users.push(userInfo);
                users = JSON.stringify(users);
                fs.writeFile('./local/local.json', users, err => {
                    console.log(err);
                });
            });
        });
        res.writeHead(301, {'location': '/home'});
        res.end();
    }
}

handlers.edit = function (req, res, index) {
    if (req.method === 'GET') {
        fs.readFile('./view/edit.html', "utf-8", (err, data) => {
            res.writeHead(200, 'text/html')
            res.write(data);
            res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let users = [];
            const userInfo = qs.parse(data);
            fs.readFile('./local/local.json', 'utf-8', (err, usersJson) => {
                users = JSON.parse(usersJson);
                for (let i = 0; i < users.length; i++) {
                    if (i === +index) {
                        users[i] = userInfo;
                    }
                }
                users = JSON.stringify(users);
                fs.writeFile('./local/local.json', users, err => {
                    console.log(err);
                });

            });
        });
        res.writeHead(301, {'location': '/home'});
        res.end();
    }
}

handlers.delete = function (req, res, index) {
    if (req.method === 'GET') {
        fs.readFile('./view/delete.html', "utf-8", (err, data) => {
            res.writeHead(200, 'text/html')
            res.write(data);
            res.end();
        });
    } else {
        let dataDelete = '';
        req.on('data', chunk => {
            dataDelete += chunk;
        })
        req.on('end', () => {
            let deleteData = [];
            fs.readFile('./local/local.json', "utf-8", (err, data1) => {
                deleteData = JSON.parse(data1);
                deleteData.splice(index,1)
                deleteData = JSON.stringify(deleteData);
                fs.writeFile('./local/local.json',deleteData,err1 => {
                    console.log(err1)
                })
            })
        })
        res.writeHead(301, {'location': '/home'});
        res.end();
    }
}

let router = {
    'home': handlers.home,
    'login': handlers.login,
    'register': handlers.register,
    'edit': handlers.edit,
    'delete': handlers.delete
};

sever.listen(3000, function () {
    console.log('Sever is running !!');
});
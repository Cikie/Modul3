// Đọc dữ liệu với Streams
// /sử dụng phương thức createReadStream() tham số là đường dẫn file bạn muốn đọc ở đây là input.txt.



// const fs = require('fs');
// let data = '';
// const readerStream = fs.createReadStream('input.txt');
// readerStream.setEncoding("utf-8");
// readerStream.on('data',function (chunk){
//     data += chunk;
// })
// readerStream.on('end',function (){
//     console.log(data)
// });readerStream.on('error',function (err){
//     console.log(err.stack);
// })


//Ghi dữ liệu với Streams
// sử dụng phương thức createWriteStream() trong module fs

const fs = require('fs');
let data = 'NodeJS learning';
const writeStream = fs.createWriteStream('output.txt')
writeStream.write(data);
writeStream.end();
writeStream.on('finish',function (){
    console.log('Write done!!')
})
writeStream.on('error',function (err){
    console.log(err.stack)
})
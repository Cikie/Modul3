// Tạo một thư mục mới:
// Sử dụng fs.mkdir() hoặc fs.mkdirSync()để tạo một thư mục mới.

// const fs = require('fs');
//
// const forderName = '/Users/joe/test'
// try {
//     if (!fs.existsSync(forderName)) {
//         fs.mkdirSync(forderName)
//     }
// } catch (err) {
//     console.log(err)
// }

// Đọc nội dung của một thư mục
// Sử dụng fs.readdir() hoặc fs.readdirSync() để đọc nội dung của một thư mục.

// const fs = require('fs');
// const folderPath = 'User/joe'
// fs.readdirSync(folderPath)

// Đổi tên một thư mục
// Sử dụng fs.rename() hoặc fs.renameSync() để đổi tên thư mục. Tham số đầu tiên là đường dẫn hiện tại, tham số thứ hai là đường dẫn mới:

// const fs = require('fs');
//
// fs.rename('Users/joe','/Users/roger',err => {
//     if (err){
//         console.log(err);
//         return;
//     }
// })


// Xoá một thư mục
// Sử dụng fs.rmdir() hoặc fs.rmdirSync()để xóa một thư mục.

const fs = require('fs')

fs.rmdir(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
    console.log(`${dir} is deleted!`);
});


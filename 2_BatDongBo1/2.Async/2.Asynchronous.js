// [Bài đọc] Kỹ thuật xử lý bất đồng bộ trong JavaScript

//  Async Callback là cách thực thi bất đồng bộ

// function asyncFuntion(callback){
//     console.log('start');
//     setTimeout(()=> {
//         callback();
//     },1000 );
//     console.log('Waiting');
// }
//  let printEnd = function (){
//      console.log('End')
//  }
//
//  asyncFuntion(printEnd)


// 5.Promise là một đối tượng bao hàm một hàm chứa các đoạn code không đồng bộ
// Hàm này chứa 2 tham số là hai hàm callback để giải quyết sau khi mã đồng bộ thực hiện thành công hay thất bại
// Hàm then() dùng để xử lý sau khi mã bất đồng bộ được thực hiện thành công và hàm catch() dùng để xử lý sau khi mã bất đồng bộ thực hiện thất bại.

// function printNumber(number) {
//     return new 5.Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number < 0) {
//                 reject();
//             } else {
//                 console.log(number);
//                 resolve();
//             }
//         }, 1000)
//     })
// }
//
// printNumber(1)
//     .then(() => printNumber(3))
//     .then(() => printNumber(-1))
//     .then(() => printNumber(2))
//     .catch(() => {
//         console.log('number < 0')
//     })


// Từ khóa Async để khai báo rằng hàm này sẽ xử lý các hàm bất đồng bộ
// nó sẽ chờ kết quả của các hàm bất đồng bộ được trả về sau đó mới thực hiện tiếp
// Hàm bất đồng bộ đó phải trả về một 5.Promise và được khai báo với từ khóa Await.


function printNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number < 0) {
                reject('number < 0');
            } else {
                console.log(number);
                resolve();
            }
        }, 0)
    })
}

async function printAll() {
    await printNumber(1);
    await printNumber(5);
    await printNumber(-6);
    await printNumber(2);
}

printAll().then(r => console.log('All done'))
    .catch(e => console.log(e))
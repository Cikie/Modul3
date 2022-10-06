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

// Promise là một đối tượng bao hàm một hàm chứa các đoạn code không đồng bộ
// Hàm này chứa 2 tham số là hai hàm callback để giải quyết sau khi mã đồng bộ thực hiện thành công hay thất bại
// Hàm then() dùng để xử lý sau khi mã bất đồng bộ được thực hiện thành công và hàm catch() dùng để xử lý sau khi mã bất đồng bộ thực hiện thất bại.

function printNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number < 0) {
                reject();
            } else {
                console.log(number);
                resolve();
            }
        }, 1000)
    })
}

printNumber(1)
    .then(() => printNumber(3))
    .then(() => printNumber(2))
    .then(() => printNumber(-1))
    .catch(() => {
        console.log('number<0')
    })
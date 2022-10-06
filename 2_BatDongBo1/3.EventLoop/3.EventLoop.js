// Mô hình Event Loop trong JavaScript Engine
// JavaScript là một ngôn ngữ lập trình đồng bộ đơn luồng, tại một thời điểm chỉ có một tác vụ được chạy

// console.log('Before delay');
//
// function delayBySeconds(sec){
//     let now;
//     let start = now = new Date();
//     while (now-start < (sec*1000)){
//         now = Date.now();
//     }
// }
// delayBySeconds(3)
// console.log('After delay')


//  Ngăn xếp lệnh gọi hàm
// Ngăn xếp hàm là một hàm theo dõi tất cả các hàm khác được thực thi trong thời gian chạy.

function LevelTwo() {
    console.log("Inside Level Two!")
}

function LevelOne() {
    LevelTwo()
}

function main() {
    LevelOne()
}

main()
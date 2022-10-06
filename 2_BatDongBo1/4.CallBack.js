// -----Callback Function là gì?-----
// chúng ta cũng có thể truyền các hàm dưới dạng tham số cho các hàm khác và gọi chúng bên trong các hàm bên ngoài.

// function print(callback) {
//     callback();
// }

//-----Cách tạo Callback:----

const messege = function (){
    console.log('Show this!!')
}
setTimeout(messege,3000)

//------- Callback hell------
// Vòng lặp vô tận “callback bên trong callback bên trong callback … ” sẽ có khả năng xảy ra. Nó được gọi là callback hell

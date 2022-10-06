let then = new Promise(function (resolve, reject){
    setTimeout(()=> resolve('done'),1000)
    setTimeout(()=> reject(new Error('error')),2000)
});

// Phương thức then();
// Then() là một phương thức ghi nhận kết quả của trạng thái (thành công hoặc thất bại) mà ta khai báo ở Reject và Resolve
then.then(
    result => alert(result),
    error => alert(error),
);

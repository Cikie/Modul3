let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.finally(() => {
    console.log('Promise ready')
}).catch(err => console.log(err))
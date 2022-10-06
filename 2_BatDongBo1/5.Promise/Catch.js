let promise = new Promise(function (resolve,reject){
    setTimeout(()=> reject(new Error('Whoops')),1000)
})
promise.catch(function (){
    console.log('error')
})
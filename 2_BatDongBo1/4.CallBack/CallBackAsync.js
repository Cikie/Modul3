function download(url,callback) {
    setTimeout(()=>{
        console.log(`Dowloading ${url}....`)
        callback(url);
    },1000)
}

function process(picture) {
    console.log(`Processing ${picture}...`)
}
let url = 'https://www.javascripttutorial.net/pic.jpg';
download(url,process);
// const p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
//     .catch(error => console.log(error))
//     .catch(error => console.log(error));

let money = 20000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 20000) {
                resolve('can buy ' + car);
            } else {
                reject('not enough money');
            }
        }, 1000);
    }))
}

money = 100000;
const promise = buyACar('Vinfast')
    .then(value => {
        console.log(value);
    }, error => {
        console.log(error);
    })

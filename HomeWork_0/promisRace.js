function promiseRace(promises) {

    return new Promise(function (resolve, reject) {
        let isCompleted = false;

        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    if (!isCompleted) {
                        isCompleted = true;
                        resolve(result);
                    }
                }, (error) => {
                    if (!isCompleted) {
                        isCompleted = true;
                        reject(error);
                    }
                });

        }
    });
}

let a = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve('A'), 3000);
});

let b = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve('B'), 2000);
});

let c = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve('C'), 4000);
});

let d = new Promise((resolve, reject) => {
    reject(('This promise is rejected'));
});


promiseRace([a, b, c])
    .then((values) => {
        console.log(values);
    }).catch((error) => {
    console.error(error);
});

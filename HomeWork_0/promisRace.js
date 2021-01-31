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

function promiseRace1(promise) {
    let completed = false;
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promise.length; i++) {
            promise[i]
                .then((result) => {
                    if (!completed) {
                        resolve(result);
                        completed = true;
                    }
                })
                .catch(((error => {
                    if (!completed) {
                        reject(error);
                        completed = true;
                    }
                })))
        }
    })
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
    setTimeout(() =>
        reject(('This promise is rejected')), 5000)
});


promiseRace([a, b, c, d])
    .then((values) => {
        console.log(values);
    }).catch((error) => {
    console.error(error);
});

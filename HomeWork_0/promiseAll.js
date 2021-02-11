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
        reject(('This promise is rejected')), 1000)
});



function MyPromiseAll(promises) {

    let results = [];
    let completed = 0;
    let isRejected = false;

    return new Promise((resolve, reject) => {

        for (let i = 0; i < promises.length; ++i) {
            promises[i]
                .catch((error) => {
                    if (!isRejected) {
                        isRejected = true;
                        reject(error);
                    }
                })
                .then((result) => {
                    if (!isRejected) {
                        results[i] = result;
                        ++completed;
                        if (promises.length === completed) {
                            resolve(results);
                        }
                    }

                });
        }
    });

}

MyPromiseAll([a, b, c])
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.error(error);
    });


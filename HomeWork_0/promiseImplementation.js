let createPromise = function (executor) {
    let state = 'pending';
    let value;
    let handler = [];

    function resolve(result) {
        value = result;
        state = 'fulfilled'

    }

    function reject(error) {
        value = error;
        state = 'rejected'

    }

    function check(fn, res, rej) {
        let flag = false;
        try {
            fn(value => {
                if (flag) return;
                flag = true;
                res(value);
            }, error => {
                if (flag) return;
                flag = true;
                rej(error);
            });
        } catch (error) {
            if (flag) return;
            flag = true;
            rej(error);
        }
    }

    check(executor, resolve, reject);

    function isFunction(parameter) {
        return typeof parameter === 'function';
    }

    function checkIsPromise(value) {
        if (value && typeof value.then === 'function') {
            value.then(val => {
                value = val;
            }, error => {
                value = error;
            })
        }
        return value;
    }

    function doResolve() {

        let [onFulfilled, onRejected] = handler;

        if (state === "pending") {
            setTimeout(doResolve);
        } else if (state === 'fulfilled') {
            if (!isFunction(onFulfilled)) return;
            value = checkIsPromise(value);
            return convertIntoPromise(onFulfilled(value));
        } else {
            if (!isFunction(onRejected)) return;
            value = checkIsPromise(value);
            return convertIntoPromise(onRejected(value));
        }
    }

    function convertIntoPromise(value) {
        return createPromise((resolve) => {
            resolve(value);
        })
    }

    return {
        then: function (onFulfilled, onRejected) {
            handler.push(onFulfilled, onRejected);
            if (state === 'pending') {
                setTimeout(doResolve);
            } else {
                return doResolve();
            }
        },

    }

}

let promise = createPromise((res, rej) => {
    res(createPromise((res, rej) => {
        res(14);
        rej(56);
    }))
}).then(value => {
    return value;
}, error => {
   return error;
}).then(value=>console.log(value), error=> console.log(error));



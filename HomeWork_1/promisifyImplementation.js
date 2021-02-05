const fs = require('fs');

function promisify(func) {
    return function (...args){
        return new Promise((resolve, reject) => {
            func(...args,(err, data)=>{
                if (err) return reject(err);
                return resolve(data);

            });
        })
    }

}

const readdirection = promisify(fs.readdir);
readdirection(__dirname)
    .then(files => console.log(files))
    .catch(err => console.log(err));
// const fs = require('fs');
//
// function createObjectFromFileSystem(path) {
//     let obj = {};
//
//     function searching(filePath,object) {
//
//         let data = fs.readdirSync(filePath)
//         data.forEach(fileName => {
//             if (fileName.includes('.txt')) {
//                 object[fileName] = true;
//             } else {
//                 object[fileName] = {};
//                 let newPath = filePath + "/" + fileName
//                 searching(newPath, object[fileName]);
//             }
//
//         })
//     }
//     searching(path,obj);
//
//     return obj
// }

const fs = require('fs').promises;

function createObjectFromFileSystem(path) {
    let obj = {};
    let count = 0;

    function searching(filePath, object) {

        fs.readdir(filePath)
            .then((data) => {
                data.forEach(fileName => {
                    if (fileName.includes('.txt')) {
                        object[fileName] = true;
                        count++;
                    } else {
                        object[fileName] = {};
                        let newPath = filePath + "/" + fileName
                        searching(newPath, object[fileName]);
                    }

                })
            })

    }

    searching(path, obj);
    setTimeout(() => console.log(JSON.stringify(obj)), 5000);

}

console.log(JSON.stringify(createObjectFromFileSystem(__dirname + '/ab')));
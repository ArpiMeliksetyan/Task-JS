const fs = require('fs');


function readUser() {
    try {
        let dataBuffer = fs.readFileSync('./user.json');
        let jsonData = dataBuffer.toString();
        let data = JSON.parse(jsonData);
        return data;
    } catch (error) {
        console.log(error)
        return [];
    }
}



function saveUser(user) {
    const dataJSON = JSON.stringify(user);
    fs.writeFileSync('./user.json', dataJSON);
}

function pushUser(path, id, firstName, lastName, password, username, email, phone) {

    let userData = readUser();
    let duplicate = userData.find(user => user.username === username);
    if (!duplicate) {
        if (fs.existsSync(path)) {
            userData.push({
                id: id,
                firstName: firstName,
                lastName: lastName,
                password: password,
                username: username,
                email: email,
                phone: phone,
            });
            saveUser(userData);
            return 'User info is saved'
        }
    } else {
        console.log('This username is used by another user, please choose another one');
        return null;
    }
}

function deleteUserForUpdate(id) {
    let userData = readUser();
    const userToKeep = userData.filter(user => user.id !== id);
    if (userData.length !== userToKeep.length) {
        saveUser(userToKeep);
    }
}

function addById(id, user) {
    let path = './user.json'
    pushUser(path, id, user.firstName, user.lastName, user.password, user.username, user.email, user.phone);
}
function parseId(urlParse) {
    return parseInt(urlParse.pathname.split('/').slice(-1).pop());
}

module.exports = {
    read: readUser,
    save: saveUser,
    push: pushUser,
    addById,
    deleteUserForUpdate,
    parseId,
}

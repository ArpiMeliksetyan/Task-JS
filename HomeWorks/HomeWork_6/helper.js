const fs = require('fs');

function readUser() {
    try {
        let dataBuffer = fs.readFileSync('./user.json');
        let jsonData = dataBuffer.toString();
        let data = JSON.parse(jsonData);
        return data;
    } catch (error) {
        return [];
    }
}

function saveUser(user) {
    const dataJSON = JSON.stringify(user);
    fs.writeFileSync('./user.json', dataJSON);
}

function checkingUpdatedFields(id, firstName, lastName, password, username, email, phone) {
    const userData = readUser();
    const user = userData.find(user => user.id === id);
    if (user) {
        for (let key in user) {
            if (user.firstName !== firstName) {
                user.firstName = firstName;
            } else if (user.lastName !== lastName) {
                user.lastName = lastName;
            } else if (user.password !== password) {
                user.password = password;
            } else if (user.username !== username) {
                let duplicate = userData.find(user => user.username === username);
                if (!duplicate) {
                    user.username = username;
                } else {
                    console.log("There are such username, please choose another one");
                    break;
                }
            } else if (user.email !== email) {
                user.email = email;
            } else if (user.phone !== phone) {
                user.phone = phone;
            }
        }

    } else {
        console.log(`There are not such user with id: ${id}`)
    }
    return user;
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
        }
    } else {
        console.log('This username is used by another user, please choose another one');
    }
}


function pushExistingUser(path, id, firstName, lastName, password, username, email, phone) {
    let userData = readUser();
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
    }
}

module.exports = {
    read: readUser,
    save: saveUser,
    update: checkingUpdatedFields,
    push: pushUser,
    pushUpdated: pushExistingUser,
}
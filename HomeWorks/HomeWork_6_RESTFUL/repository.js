const helper = require('./helper');

function addUser(firstName, lastName, password, username, email, phone) {
    let userData = helper.read();
    let path = './user.json'
    let ids = userData.map(user => user.id);
    let id = Math.max(...ids) + 1;
    let addedUser = helper.push(path, id, firstName, lastName, password, username, email, phone);
    if (addedUser) {
        console.log(`You added a user with id: ${id}`);
        return addedUser;
    }
    return null;
}

function deleteUser(id) {
    let userData = helper.read();
    const userToKeep = userData.filter(user => user.id !== id);
    if (userData.length !== userToKeep.length) {
        helper.save(userToKeep);
        return `The user with id: ${id} is removed successfully`;
    } else {
        console.log(`There are not such user with id: ${id}`);
        return null;
    }
}

function updateUserById(id, updatedFields) {
    const userData = helper.read();
    const user = userData.find(user => user.id === id);
    if (user) {
        for (let key in user) {
            if (key in updatedFields) {
                user[key] = updatedFields[key];
            }
        }
        const duplicate = userData.find(userData => userData.username === user.username && userData.id !== user.id);
        if (!duplicate) {
            helper.deleteUserForUpdate(id);
            helper.addById(id, user);
            return 'You successfully updated user info'
        } else {
            console.log('This username is used by another user, please choose another one');
        }

    } else {
        console.log(`There are not such user with id: ${id}`)
        return user;
    }
}

function findById(id) {
    let userData = helper.read();
    let user = userData.find(user => user.id === id);
    if (!user) {
        console.log(`There are no such user with id: ${id}`)
    }
    return user;
}

function searchByText(text) {
    let userData = helper.read();
    let users = userData.filter(user => user.firstName.includes(text));
    if (users.length > 0) {
        return users;
    }
    return null;
}

module.exports = {
    add: addUser,
    delete: deleteUser,
    update: updateUserById,
    find: findById,
    search: searchByText
}


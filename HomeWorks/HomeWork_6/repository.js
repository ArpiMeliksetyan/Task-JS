const helper = require('./helper');

function addUser(firstName, lastName, password, username, email, phone) {
    let userData = helper.read();
    let path = './user.json'
    let ids = userData.map(user => user.id);
    let id = Math.max(...ids) + 1;
    helper.push(path, id, firstName, lastName, password, username, email, phone);
}

function updateUserById(id, firstName, lastName, password, username, email, phone) {
    let path = './user.json'
    helper.pushUpdated(path, id, firstName, lastName, password, username, email, phone);
}

function deleteUser(id) {
    let userData = helper.read();
    const userToKeep = userData.filter(user => user.id !== id);
    if (userData.length !== userToKeep.length) {
        helper.save(userToKeep);
    } else {
        console.log(`There are not such user with id: ${id}`);
    }
}

function updateUserInfo(id, firstName, lastName, password, username, email, phone) {
    const updatedUser = helper.update(id, firstName, lastName, password, username, email, phone);
    deleteUser(id);
    updateUserById(id, updatedUser.firstName, updatedUser.lastName, updatedUser.password, updatedUser.username, updatedUser.email, updatedUser.phone)
}

function findById(id) {
    let userData = helper.read();
    let user = userData.find(user => user.id === id);
    if (!user) {
        return `There are no such user with id: ${id}`
    }
    console.log(user);
    return user;
}

module.exports = {
    add: addUser,
    delete: deleteUser,
    update: updateUserInfo,
    find: findById,
}

// readUserInfo("ArpiMeliksetyan", "123456");
// addUser('Ani', 'Antonyan', '258963147', 'Arsen', 'karen@mail.ru', '033456123');
// deleteUser(3);
// updateUserInfo(6, 'Anka', "an", "25", 'Ak', 'arpi@mail.ru0', '777');
// console.log(findById(0));

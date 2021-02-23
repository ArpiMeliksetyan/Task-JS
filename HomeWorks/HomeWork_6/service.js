const repo = require('./repository');
const helper = require('./helper')

function createUser(firstName, lastName, password, username, email, phone) {
    repo.add(firstName, lastName, password, username, email, phone);
}

function deleteUser(id) {
    repo.delete(id);
}

function updateUser(id, firstName, lastName, password, username, email, phone) {
    repo.update(id, firstName, lastName, password, username, email, phone)
}

function getAllUsers() {
    return helper.read();
}

function getUserById(id){
    return repo.find(id);
}

module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    getUserById: getUserById,


}

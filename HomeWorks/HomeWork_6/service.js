const repo = require('./repository');
const helper = require('./helper')

function createUser(firstName, lastName, password, username, email, phone) {
    repo.add(firstName, lastName, password, username, email, phone);
}

function deleteUser(id) {
    repo.delete(id);
}

function updateUser(id, updatedFields) {
    repo.update(id, updatedFields)
}

function getAllUsers() {
    return helper.read();
}

function getUserById(id){
    return repo.find(id);
}

function searchByText(text){
    return repo.search(text);
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    searchByText,
}

const repo = require('./repository');
const helper = require('./helper')

function createUser(firstName, lastName, password, username, email, phone) {
   return repo.add(firstName, lastName, password, username, email, phone);
}

function deleteUser(id) {
    return repo.delete(id);
}

function updateUser(id, updatedFields) {
   return repo.update(id, updatedFields);
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

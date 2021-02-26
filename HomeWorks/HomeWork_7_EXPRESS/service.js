const service = require('../HomeWork_6_RESTFUL/service');

function getAllUsers() {
    let users = service.getAllUsers();
    return JSON.stringify(users);
}

function deleteUser(id) {
    return service.deleteUser(id);

}

function createUser(body) {
    return service.createUser(body.firstName, body.lastName, body.password, body.username, body.email, body.phone);
}

function updateUser(body, id) {
  return service.updateUser(id, body);
}

function findById(id) {
    let user = service.getUserById(id);
    return JSON.stringify(user);
}

function searchByText(text) {
    let users = service.searchByText(text);
    if (users) {
        return JSON.stringify(users);
    }
}

module.exports = {
    getAllUsers,
    deleteUser,
    createUser,
    updateUser,
    findById,
    searchByText,
}
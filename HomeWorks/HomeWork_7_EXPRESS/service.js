const service = require('../HomeWork_6_RESTFUL/service');

function getAllUsers() {
    let users = service.getAllUsers();
    return JSON.stringify(users);
}

function deleteUser(id) {
    service.deleteUser(id);

}

function createUser(body) {
    // let body1 = JSON.parse(body);
    service.createUser(body.firstName, body.lastName, body.password, body.username, body.email, body.phone);
}

function updateUser(body, id) {
    service.updateUser(id, body);
}

function findById(id) {
    let user = service.getUserById(id);
    return JSON.stringify(user);
}

function searchByText(text) {
    let users = service.searchByText(text);
    return JSON.stringify(users);
}

module.exports = {
    getAllUsers,
    deleteUser,
    createUser,
    updateUser,
    findById,
    searchByText,
}
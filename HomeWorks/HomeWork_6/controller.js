const service = require('./service');

function getAllUsers(req, res) {
    let users = service.getAllUsers();
    res.statusCode = 200;
    res.end(JSON.stringify(users));
}

function deleteUser(req, res, id) {
    service.deleteUser(id);
    res.statusCode = 200;
    res.end();
}

function createUser(req, res, body) {
    let body1 = JSON.parse(body);
    service.createUser(body1.firstName, body1.lastName, body1.password, body1.username, body1.email, body1.phone);
    res.statusCode = 200;
    res.end();
}

function updateUser(req, res, body) {
    let body1 = JSON.parse(body);
    service.updateUser(body1.id, body1.firstName, body1.lastName, body1.password, body1.username, body1.email, body1.phone);
    res.statusCode = 200;
    res.end();
}

function findById(req, res, id) {
    let user = service.getUserById(id);
    res.statusCode = 200;
    res.end(JSON.stringify(user));
}

module.exports = {
    getAllUsers: getAllUsers,
    deleteUser: deleteUser,
    createUser: createUser,
    updateUser: updateUser,
    findById: findById,
}
const service = require('./service');

function getAllUsers(req, res) {
    let users = service.getAllUsers();
    if (users) {
        res.statusCode = 200;
    } else {
        res.statusCode = 404;
    }
    res.end(JSON.stringify(users));
}

function deleteUser(req, res, id) {
    let deleted = service.deleteUser(id);
    if (deleted) {
        res.statusCode = 200;
    } else {
        res.statusCode = 404;
    }
    res.end();
}

function createUser(req, res, body) {
    let body1 = JSON.parse(body);
    let user = service.createUser(body1.firstName, body1.lastName, body1.password, body1.username, body1.email, body1.phone);
    if (user) {
        res.statusCode = 201;
    } else {
        res.statusCode = 400;
    }
    res.end();
}

function updateUser(req, res, body, id) {
    let body1 = JSON.parse(body);
    let user = service.updateUser(id, body1);
    if (user) {
        res.statusCode = 200;
    } else {
        res.statusCode = 400;
    }
    res.end();
}

function findById(req, res, id) {
    let user = service.getUserById(id);
    if (user) {
        res.statusCode = 200;
    } else {
        res.statusCode = 404;
    }
    res.end(JSON.stringify(user));
}

function searchByText(req, res, text) {
    let users = service.searchByText(text);
    if (users) {
        res.statusCode = 200;
    } else {
        res.statusCode = 404;
    }
    res.end(JSON.stringify(users));
}

module.exports = {
    getAllUsers,
    deleteUser,
    createUser,
    updateUser,
    findById,
    searchByText,
}

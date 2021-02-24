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
    res.statusCode = 201;
    res.end();
}

function updateUser(req, res, body,id) {
    let body1 = JSON.parse(body);
    service.updateUser(id ,body1);
    res.statusCode = 200;
    res.end();
}

function findById(req, res, id) {
    let user = service.getUserById(id);
    res.statusCode = 200;
    res.end(JSON.stringify(user));
}

function searchByText(req,res,text){
    let users = service.searchByText(text);
    res.statusCode = 200;
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
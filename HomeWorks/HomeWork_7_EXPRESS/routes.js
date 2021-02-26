const express = require('express');
const service = require('./service');
const appRouter = express.Router();
appRouter.use(express.json());


appRouter.get('/', (req, res) => {
    let users = service.getAllUsers();
    if (users) {
        res.status(200).send(users);
    } else {
        res.status(500).send('Try later');
    }

});

appRouter.get(`/:id`, (req, res) => {
        let user = service.findById(parseInt(req.params.id));
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send('User Not Found')
        }
    }
);

appRouter.get((`/search/:text`), (req, res) => {
    let users = service.searchByText(req.params.text);
    console.log(users);
    if (users) {
        res.status(200).send(users);
    } else {
        res.status(404).send('Search is empty')
    }
});

appRouter.put((`/:id`), (req, res) => {
    let updatedUser = service.updateUser(req.body, parseInt(req.params.id));
    if (updatedUser) {
        res.status(200).send(updatedUser);
    } else {
        res.status(400).send('Something went wrong')
    }
});

appRouter.post(`/`, (req, res) => {
    let newUser = service.createUser(req.body);
    if (newUser) {
        res.status(200).send(newUser);
    } else {
        res.status(500);
    }
});

appRouter.delete(`/:id`, (req, res) => {
    let deletedUser = service.deleteUser(parseInt(req.params.id));
    if (deletedUser) {
        res.status(200).send(deletedUser);
    } else {
        res.status(400);
    }
});

module.exports = appRouter;
const service = require('./service');
const express = require('express');
const app = express();
const baseUrl = '/api/v1/users'

app.use(express.json());

app.get(`${baseUrl}/all`, (req, res) => {
    res.status(200).send(service.getAllUsers());
});

app.get(`${baseUrl}/get/:id`, (req, res) => {
    res.status(200).send(service.findById(parseInt(req.params.id)));
});

app.get((`${baseUrl}/search/:text`), (req, res) => {
    res.status(200).send(service.searchByText(req.params.text));
});

app.put((`${baseUrl}/update/:id`), (req, res) => {
    res.status(200).send(service.updateUser(req.body, parseInt(req.params.id)));
})

app.post(`${baseUrl}/add`, (req, res) => {
    res.status(200).send(service.createUser(req.body));
});

app.delete(`${baseUrl}/delete/:id`,(req, res) => {
    res.status(200).send(service.deleteUser(parseInt(req.params.id)))
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running');

})
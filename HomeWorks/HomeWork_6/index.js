const http = require('http');
const url = require('url');
const controller = require('./controller');
const querystring = require('querystring');


const server = http.createServer((req, res) => {

        const urlParse = url.parse(req.url, true);
        let id = parseInt(urlParse.path.split('?')[1]);

        if (urlParse.pathname === '/get' && req.method === 'GET') {
            controller.getAllUsers(req, res);
        } else if (urlParse.pathname === '/delete/' && req.method === 'DELETE') {
            controller.deleteUser(req, res, id)
        } else if (urlParse.pathname === '/add' && req.method === 'POST') {
            req.on('data', body => {
                controller.createUser(req, res, body.toString())
            });

        } else if(urlParse.pathname === '/update' && req.method === 'PUT'){
            req.on('data', body => {
                controller.updateUser(req, res, body.toString())
            });
        } else if(urlParse.pathname === '/get/' && req.method === 'GET'){
            controller.findById(req,res,id);
        }
    }
).listen(3000, () => {
    console.log("Hello");
});
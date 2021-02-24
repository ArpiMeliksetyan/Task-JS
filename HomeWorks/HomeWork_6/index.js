const http = require('http');
const url = require('url');
const controller = require('./controller');
const helper = require('./helper');
let baseUrl = '/api/v1/users';

http.createServer((req, res) => {

        const urlParse = url.parse(req.url, true);


        if (urlParse.pathname === baseUrl && req.method === 'GET') {
            controller.getAllUsers(req, res);
        } else if (urlParse.pathname.startsWith(baseUrl + '/') && req.method === 'GET') {
            let id = helper.parseId(urlParse);
            controller.findById(req, res, id);
        } else if (urlParse.pathname.startsWith(baseUrl + '/') && req.method === 'PUT') {
            let id = helper.parseId(urlParse);
            req.on('data', body => {
                controller.updateUser(req, res, body.toString(),id)
            });
        } else if (urlParse.pathname .startsWith(baseUrl + '/') && req.method === 'DELETE') {
            let id = helper.parseId(urlParse);
            controller.deleteUser(req, res, id)
        } else if (urlParse.pathname === baseUrl && req.method === 'POST') {
            req.on('data', body => {
                controller.createUser(req, res, body.toString())
            });
        } else if(urlParse.pathname.startsWith(baseUrl + '?') && req.method === 'GET'){
            console.log(1);
            let text = urlParse.query;
            controller.searchByText(req,res,text)
        }
    }
).listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
const express = require('express');
const app = express();
const router = require('./routes');
const baseUrl = '/api/v1/users';


app.use(baseUrl, router)

app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running');

})
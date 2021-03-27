require('./repository/mongoose')
const axios = require('axios');
const express = require('express');
const client = require('../HomeWork_9/repository/redis')
const Data = require('./model/gitUser');

const app = express();
app.use(express.json());

axios.get('https://api.github.com/search/repositories?q=something')
    .then(function (response) {
        for (let i of response.data.items) {
            assignDataValue(i);
        }
    })
    .catch(function (error) {
        console.log(error);
    });

async function assignDataValue(obj) {
    const {id, name, description, url, git_url} = obj;
    const upData = new Data({id, name, description, url, git_url});
    await upData.save();
}

app.get('/repository/count', async (req,res)=>{
    const data = await Data.find();
    console.log(data);
    res.send(JSON.stringify(data.length));

})
app.get('/repository/:id', async (req, res) => {
    const id = req.params.id;
    await client.get(id, async (error, reply) => {
        if(reply){
            console.log("Found in cache");
            res.send(reply);
        } else{
            await Data.findOne({id},(err,data)=>{
                if(err){
                    console.log(err);
                } else{
                    client.set(id,JSON.stringify(data));
                    res.send(data);
                    console.log("Found in MongoDb")
                }

            })
        }
    })
})

app.listen(3000, () => {
    console.log('Connected');
})






const redis = require('redis');
module.exports = redis.createClient(6379);
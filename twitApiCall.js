var Twit = require('twit')

// var TwitAPI = require(dotenv).config();
var T = new Twit({
    consumer_key: '${process.env.consumer_key}',
    consumer_secret: '${process.env.consumer_secret}',

    access_token: '${process.env.access_token}',
    access_token_secret: '${process.env.access_token_secret}',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
})

var params = {
    q: '#survivor' + '#survivor39',

    count: 1
}
console.log("key" + process.env.consumer_key + " " + process.env.consumer_secret)

T.get('search/tweets', params, function (err, data, response) {
    console.log(data)
})


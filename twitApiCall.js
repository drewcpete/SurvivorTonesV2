var Twit = require('twit')
var config = require('./config.js')
// var TwitAPI = require(dotenv).config();
var T = new Twit(config)

var season39Params = {
    q: '#survivor' + '#survivor39',
    result_type: 'recent',
    count: 10
}

let season39TextData = '';

let season13Params = {
    q: 'Survivor',
    result_type: 'mixed',
    count: 100,
    fromDate: '200609140000',
    toDate: '200612190000'
}

let season13TextData = '';

let season14Params = {
    q: '#SurvivorFiji',
    result_type: 'mixed',
    count: 100,
    fromDate: '200702080000',
    toDate: '200705130000'
}

let season14TextData = ''

let season15Params = {
    q: '#Survivor' + 'Survivor China',
    result_type: 'mixed',
    count: 100,
    fromDate: '200709200000',
    toDate: '200712170000'
}
let season15TextData = ''

let season16Params = {
    q: '#SurvivorMicronesia',
    result_type: 'mixed',
    count: 100,
    fromDate: '200802070000',
    toDate: '200805110000'
}
let season16TextData = ''

let season17Params = {
    q: '#SurvivorGabon',
    result_type: 'mixed',
    count: 100,
    fromDate: '200809250000',
    toDate: '200812150000'
}
let season17TextData = ''

let season18Params = {
    q: '#SurvivorTocantins',
    result_type: 'mixed',
    count: 100,
    fromDate: '200902120000',
    toDate: '200905170000'
}
let season18TextData = ''

let season19Params = {
    q: '#SurvivorSomoa',
    result_type: 'mixed',
    count: 100,
    fromDate: '200909170000',
    toDate: '200912210000'
}
let season19TextData = ''

let season20Params = {
    q: '#SurvivorHvV' + '#SurvivorHeroesvsVillians',
    result_type: 'mixed',
    count: 100,
    fromDate: '201002110000',
    toDate: '201005160000'
}
let season20TextData = ''

let season21Params = {
    q: '#SurvivorNicaragua',
    result_type: 'mixed',
    count: 100,
    fromDate: '2010101450000',
    toDate: '201012190000'
}
let season21TextData = ''

let season22Params = {
    q: '#SurvivorRI',
    result_type: 'mixed',
    count: 100,
    fromDate: '2010101450000',
    toDate: '201012190000'
}
let season21TextData = ''


T.get('search/tweets', params, function (err, data, response) {
    if(!err){
        for (let i = 0; i < data.statuses.length; i++) {

            twitterTextData.concat(data.statuses[i].text)
            console.log(data.statuses[i].text)
        }
    } else {
        console.log('error'+err);
    }
    // console.log(data)
})

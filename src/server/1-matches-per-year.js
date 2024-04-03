const matchesData = require('../utill.js')

function matches_per_year(){
    matchesData('../data/matches.csv').then((data)=>{
        console.log(data[0])})
}

console.log(matches_per_year());
const csv= require('csvtojson')

function matchesData(filePath){
    console.log(filePath);
    return csv()
            .fromFile('../data/matches.csv')
            .then((data)=>{
                 return data;
    
})
}

module.exports=matchesData;
//util.js file
var http = require("http")
//var word = process.argv[2]
var sources = require('./lib/source.json')
var program = require('commander')
var print = require('./lib/print')

//decode entities to character
var Entities = require('html-entities').AllHtmlEntities;
entities = new Entities();

program
    .command("fy")
    .version('0.0.1')
    .parse(process.argv)

module.exports = function(word) {
    var url = sources["yd"] + encodeURIComponent(word)
    http.get(url, function(res){
        var con = ""
        res.setEncoding('utf8')
        res.on('data', function(chunk){
            con += chunk
        })

        res.on('error', function(err){
            console.log(err)
        })

        res.on('end', function(){
            print(JSON.parse(entities.decode(con)))
        })
    })

}

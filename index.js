#!/usr/bin/env node

var http = require("http")
var word = process.argv[2]
var url = "http://fanyi.youdao.com/openapi.do?keyfrom=forum3&key=1268771022&type=data&doctype=json&version=1.1&q=" + word

var commander = require("commander")

http.get(url, function(res){
    var con = ""
    res.setEncoding('utf8')
    res.on('data', function(chunk){
        con += chunk
    })

    res.on('end', function(){
        console.log(con)
    })
})

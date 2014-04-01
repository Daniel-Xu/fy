//print
//json
require('colorful').toxic()
var _ = require("underscore")
module.exports = function(data){
   var query = data.query

   //query
   _log()
   if(data.basic && data.basic.phonetic){
       query += ("  ["+ data.basic.phonetic +"]").red
   }
   _log(query)


   //translation
   _log()
   if(data.basic && data.basic.explains){
       _.each(data.basic.explains, function logExplain(ele, index){
           _log("- ".faint + ele.green, 3)
       })
   }
        
   //sentence
   _log()
   if(data.web) {
       var sKey = _.pluck(data.web, 'key')
       var sValue = _.pluck(data.web, 'value')

       _.each(sKey, function logSt(ele, i){
           _log(i+1+". ".faint + ele, 3)
           _log("   " + sValue[i].join(",").cyan, 3)
        
       })
   }
}

function _log(msg, indentN)
{
    indentN = indentN || 1;
    var indent = ' '
    _.each(_.range(1, indentN), function incIndent(){
        indent += ' '
    })

    console.log(indent, msg||"")
}

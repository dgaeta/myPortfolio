/**
    Script to read xml files provided in 'data' folder as output 
    the desired  fields into a json file and json object 

    @author - Daniel Gaeta
**/

// Module imports
var fs = require('fs');
var xml2js = require('xml2js');
 
var parser = new xml2js.Parser();
var path = require("path");


// Data stuctures
var json = {};
var Chess_10 = {};
var Chess_11 = {};


// Parse Chess 1.0 and Chess 1.1
fs.readFile(path.join(__dirname,'/../../data/svn_list.xml'), function(err, data) {
  parser.parseString(data, function (err, result) {
    if(err) throw err;
    json = result;
    console.log(result);


    // Save only the desired field types for Chess 1.0
    var filename = "";
    for( var i=0; i< json["lists"]["list"][0]["entry"].length; i++) { 
        if (json["lists"]["list"][0]["entry"][i]["name"].length > 0) {
            filename = json["lists"]["list"][0]["entry"][i]["name"][0];
            if (filename.indexOf('Chess_1.0') > -1 && filename.indexOf('.java') > -1) {
                Chess_10[filename] = json["lists"]["list"][0]["entry"][i];
            };
        };
    };
    // Save the json object to file
    fs.writeFile( "Chess_10.json", JSON.stringify( Chess_10 ), "utf8");


    // Save only the desired field types for Chess 1.1
    var filename = "";
    for( var i=0; i< json["lists"]["list"][0]["entry"].length; i++) { 
        if (json["lists"]["list"][0]["entry"][i]["name"].length > 0) {
            filename = json["lists"]["list"][0]["entry"][i]["name"][0];
            if (filename.indexOf('Chess-1.1') > -1 && filename.indexOf('.java') > -1) {
                Chess_11[filename] = json["lists"]["list"][0]["entry"][i];
            };
        };
    };
    // Save the json object to file
    fs.writeFile( "Chess_11.json", JSON.stringify( Chess_11 ), "utf8");
  });
});



exports.Chess_10 = Chess_10;
exports.Chess_11 = Chess_11;

console.log("Done Parsing Xml to Json")

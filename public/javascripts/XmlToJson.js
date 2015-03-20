/**
    Script to read xml files provided in 'data' folder as output 
    the desired  fields into a json file and json object 

    @author - Daniel Gaeta
**/

// Module imports
var fs = require('fs');
var xml2js = require('xml2js');
var path = require("path");

var parser = new xml2js.Parser();

// Data stuctures
var test_file1 = {};
var test_file2 = {};


// Parse test file 1 into json object
fs.readFile(path.join(__dirname,'/../../data/test1_xml.xml'), function(err, data) {
  parser.parseString(data, function (err, result) {
    if(err) throw err;
    test_file1 = result;
    //console.log(result);
    exports.test_file1 = test_file1;

    // Save the json object to file
    fs.writeFile( "test_file1.json", JSON.stringify( test_file1 ), "utf8");
  });
});

// Parse test file 2 into json object
fs.readFile(path.join(__dirname,'/../../data/test2_xml.xml'), function(err, data) {
  parser.parseString(data, function (err, result) {
    if(err) throw err;
    test_file2 = result;
    //console.log(result);
    exports.test_file2 = test_file2;

    // Save the json object to file
    fs.writeFile( "test_file2.json", JSON.stringify( test_file2 ), "utf8");
  });
});

// console.log(test_file1);
// console.log(test_file2);

// exports.test_file1 = test_file1;
// exports.test_file2 = test_file2;

console.log("Done Parsing Xml to Json")

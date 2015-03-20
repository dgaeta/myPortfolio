/**
	Tests the coversion of several small Xml files to json objects.

	@author Daniel Gaeta
**/


var assert = require("assert");
var path = require("path");
var xmlToJson = require(path.join(__dirname,'/../public/javascripts/XmlToJson'));
var fs = require('fs');
var xml2js = require('xml2js');



describe('Json Objects', function(){
  describe('#xmlToJson', function(){
    it('object 1 should be of length 2', function(){
    	file1_json = {}
    	fs.readFile('test_file1.json', function(err, data) {
  			parser.parseString(data, function (err, result) {
  				file1_json = result;
		      assert.equal(2, file1_json.length);
  			});
  		});
    })
  })

  describe('#xmlToJson', function(){
    it('object 1 should have the correct keys', function(){
    	file1_json = {}
    	fs.readFile('test_file1.json', function(err, data) {
  			parser.parseString(data, function (err, result) {
  				file1_json = result;
		      assert.equal(true, file1_json["entries"].length > 0 );
		      assert.equal(true, file1_json["entries"]["entry"].length > 0 );
  			});
  		});
    })
  })

  describe('#xmlToJson', function(){
    it('object 1 should have the correct values', function(){
    	file1_json = {}
    	fs.readFile('test_file1.json', function(err, data) {
  			parser.parseString(data, function (err, result) {
  				file1_json = result;
		      assert.equal("Daniel Gaeta", file1_json["entries"]["entry"][0]["name"] );
		      assert.equal("Derek Jeter", file1_json["entries"]["entry"][1]["name"] );
  			});
  		});
    })
  })

  describe('#xmlToJson', function(){
    it('object 2 should be of length 2', function(){
    	file2_json = {}
    	fs.readFile('test_file2.json', function(err, data) {
  			parser.parseString(data, function (err, result) {
  				file2_json = result;
		      assert.equal(2, file2_json.length);
  			});
  		});
    })
  })

  describe('#xmlToJson', function(){
    it('object 2 should have the correct keys', function(){
    	file2_json = {}
    	fs.readFile('test_file2.json', function(err, data) {
  			parser.parseString(data, function (err, result) {
  				file2_json = result;
		      assert.equal(true, file2_json["articles"].length > 0 );
		      assert.equal(true, file2_json["articles"]["article"].length > 0 );
  			});
  		});
    })
  })

  describe('#xmlToJson', function(){
    it('object 2 should have the correct values', function(){
    	file2_json = {}
    	fs.readFile('test_file2.json', function(err, data) {
  			parser.parseString(data, function (err, result) {
  				file2_json = result;
		      assert.equal("Daniel Gaeta", file2_json["articles"]["article"][0]["author"] );
		      assert.equal("Jason Shen", file2_json["articles"]["article"][1]["author"] );

		      assert.equal("Google collapses", file2_json["articles"]["article"][0]["headline"] );
		      assert.equal("Virtual Reality is the future", file2_json["articles"]["article"][1]["headline"] );

		      assert.equal("TechCrunch", file2_json["articles"]["article"][0]["newspaper"] );
		      assert.equal("PC Magazine", file2_json["articles"]["article"][1]["newspaper"] );
  			});
  		});
    })
  })
});
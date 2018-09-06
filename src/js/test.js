var Web3 = require('web3')
var fs = require('fs')

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);
    
} else { 
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

}
//document.write("<script language=javascript src='jquery.min.js’></script>”)

var eth = web3.eth
//var abi = JSON.parse(fs.readFileSync("../../build/contracts/hello.json").toString())

$.getJSON("hello.json", function(data) {
    var abi = json_encode($data,true);
});


var contract = eth.contract(abi)
var instance = contract.at("0xdf4f80c10f7708b467114d5a0d50de0e644944f0")

console.log(eth.accounts())




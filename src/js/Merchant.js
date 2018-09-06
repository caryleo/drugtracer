var Web3 = require('web3')

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);
    
} else { 
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

}

var eth = web3.eth
var abi = JSON.parse(fs.readFileSync("../../build/contracts/Merchant.json"))
var contract = eth.contract(abi)
var instance = contract.at("")
console.log(instance.   )



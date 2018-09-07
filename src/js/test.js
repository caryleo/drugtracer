var Web3 = require('web3')

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);
    
} else { 
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

}

var abi = [{"constant":false,"inputs":[{"name":"to","type":"string"},{"name":"number","type":"string"}],"name":"setSimpleSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"string"},{"name":"offset","type":"uint256"}],"name":"get","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]
 

var address = "0xb95c190ce7fbacdf3dd7f1f8125faf870b673c49"

tokenObject = web3.eth.contract(abi).at(address);
//console.log(web3.isConnected())
//console.log(web3.eth.accounts[0])
web3.eth.defatltAccount = '0x341744a7191e2fd52e24968b93e87db41a1ba250';
//console.log(web3.eth.getAccounts());
//console.log(tokenObject.get("123", 6));
tokenObject.setSimpleSale.sendTransaction("zhang","17",{from: web3.eth.defatltAccount}).then(console.log(tokenObject.get.call("zhang",9)));


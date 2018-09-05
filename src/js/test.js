var Web3 = require('web3')

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);
    
} else { 
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

}

tokenObject = web3.eth.contract([{"constant":true,"inputs":[],"name":"s","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"s1","type":"string"},{"name":"s2","type":"string"}],"name":"foo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]).at("0x67c26f5529dc55790ff29a2ebada84ec49a50da7");

var version = web3.version.node;
console.log(version);

console.log(tokenObject.foo("asd","asd",{from:web3.eth.accounts[0]}));
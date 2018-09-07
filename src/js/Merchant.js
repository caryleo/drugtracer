var Web3 = require('web3')

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);
    
} else { 
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

}

tokenObject = web3.eth.contract([{
    constant: true,
    inputs: [],
    name: "fa",
    outputs: [{
        name: "",
        type: "string"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}]
).at("0xdf4f80c10f7708b467114d5a0d50de0e644944f0");


console.log(tokenObject.fa());
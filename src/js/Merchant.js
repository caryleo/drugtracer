var Web3 = require('web3')

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);
    
} else { 
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

}

var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
var address = "0x16a726ec77337145024140404139d3610d35449b"

instance = web3.eth.contract(abi).at(address);

web3.eth.defaultAccount = '0xf25b4f2c54d59688b211b63451f04ad3677048b8';

//web3.eth.sendTransaction({from:"0x0342bd23544ded0a902f8275206b333204cf8bfd", to:web3.eth.defaultAccount, value:web3.toWei(10,'ether')});

//交易2  from:Merchant  to: Drugstore
// web3.eth.sendTransaction({from:web3.eth.defaultAccount, 
//     to:"0x867ba6108927eae5cdb99a1defd4091daf38a1e9s" ,value:web3.toWei(300000,'wei') },function(err, address){
//         if(!err){
            
//             instance.setRoll.sendTransaction(address,
//                 "0xbdc0c9122099228bd8666b6746862a87716c317944f362ad635f2e2fb0c05c2f", "2018-09-20", 9, "0x867ba6108927eae5cdb99a1defd4091daf38a1e9", 
//                 {from:web3.eth.defaultAccount, gas:3000000 });
            
//             console.log(address);

//             web3.eth.sendTransaction({from:"0x0342bd23544ded0a902f8275206b333204cf8bfd", to:web3.eth.defaultAccount, value:web3.toWei(1,'ether')});
//         }
//     });

var info = instance.getRoll("0xed152765181a31f87e5030ed3b4da311560e559b8f9e9b1a73852da490215b08");
console.log(info)

       
var Web3 = require('web3')

if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);
    
} else { 
    
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

}

var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
var address = "0x16a726ec77337145024140404139d3610d35449b"

instance = web3.eth.contract(abi).at(address);
web3.eth.defaultAccount = '0xccef5daaed4187c4d79635879b69ed95a0ea6edf';
//web3.eth.sendTransaction({from:"0x0342bd23544ded0a902f8275206b333204cf8bfd", to:web3.eth.defaultAccount, value:web3.toWei(10,'ether')});



//交易5  from:Customer  to:Administrator 
// var a = web3.eth.sendTransaction({from:web3.eth.defaultAccount , 
//     to:"0xccef5daaed4187c4d79635879b69ed95a0ea6edf" , gas:30000 },function(err, address){
//         if(!err){
            
            instance.setDeal.sendTransaction("0x7d11bedabb3f51a0e8255599305657eb006a10f2aa2c853f89df382e3b022335", 
                            "2018-09-20", "0xabefe256504fff189e97d6c8e7e7c20c4f75fa7e22bcaba2b18393c74ccf5b26", 0 ,
                {from:web3.eth.defaultAccount, gas:3000000 });

    //         //console.log(address);

    //         web3.eth.sendTransaction({from:"0x0342bd23544ded0a902f8275206b333204cf8bfd", to:web3.eth.defaultAccount, gas:30000});
    //     }
    // });

// var obj = instance.getAdminReport("...");
// console.log(obj)

// var str = JSON.stringify(obj.gas)
// console.log(str)

// var info = instance.getReport("");
// console.log(info);

// for(var i = 0 ; i < instance.getLengthReports(); i++){
//     var b = instance.getNextReports(i); 
//     console.log(b);
// }
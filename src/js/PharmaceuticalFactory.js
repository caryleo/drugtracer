function sendMess1(){
    var Web3 = require('web3');

    if (typeof web3 !== 'undefined') {

        web3 = new Web3(web3.currentProvider);
        
    } else { 
        
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));

    }
    var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
    var address = "0x16a726ec77337145024140404139d3610d35449b";
    instance = web3.eth.contract(abi).at(address);

    var drug = document.getElementById('drug').value;
    var produceDate = document.getElementById('produceDate').value;
    var volume_produce = document.getElementById('volume_produce').value;
    var address = document.getElementById('address').value;
    var volume = 0;
    if(address.length==0){alert("address can not be null"); return;} 
    if(drug.length==0){alert("drug can not be null"); return;} 
    if(produceDate.length==0){alert("produceDate can not be null"); return;} 
    if(volume_produce.length==0){alert("volume_produce can not be null"); return;} 
    if(parseInt(volume_produce) == NaN) {alert("volume must be a number");return;}
    else{volume = parseInt(volume_produce);}
    
    web3.eth.defaultAccount = address;

    web3.eth.sendTransaction({from:"0x0342bd23544ded0a902f8275206b333204cf8bfd" , 
    to: web3.eth.defaultAccount , value:web3.toWei(300000,'wei') },function(err, address){
        if(!err){
            
            instance.setProduce.sendTransaction(address,
                drug,  web3.eth.defaultAccount, produceDate, volume, 
                {from:"0x0342bd23544ded0a902f8275206b333204cf8bfd", gas:300000});
            
    
            alert("Successfully\n"); 
            document.write("your drug hash is " + address);
        }else{
            alert(err);
            alert("Failed\n" + "check your input!");
        }
    });
}

function sendMess2(){
    if (typeof web3 !== 'undefined') {

        web3 = new Web3(web3.currentProvider);
        
    } else { 
        
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));
    
    }
    var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    var address = "0x16a726ec77337145024140404139d3610d35449b"
    instance = web3.eth.contract(abi).at(address);

    var address = document.getElementById('address').value;
    var drugCode_inflow = document.getElementById('drugCode_inflow').value;
    var inflowDate = document.getElementById('inflowDate').value;
    var volume_inflow = document.getElementById('volume_inflow').value;
    var toMerchant = document.getElementById('toMerchant').value;
    var volume = 0;

    if(address.length==0){alert("address can not be null"); return;} 
    if(drugCode_inflow.length==0){alert("drugCode_inflow can not be null"); return;} 
    if(inflowDate.length==0){alert("inflowDate can not be null"); return;} 
    if(volume_inflow.length==0){alert("volume_inflow can not be null"); return;} 
    if(toMerchant.length==0){alert("toMerchant can not be null"); return;}
    if(parseInt(volume_inflow) == NaN) {alert("volume must be a number");return;}
    else{volume = parseInt(volume_inflow);}

    web3.eth.defaultAccount = address;

    web3.eth.sendTransaction({from:web3.eth.defaultAccount , 
    to:toMerchant , value:web3.toWei(300000,'wei') },function(err, address){
        if(!err){
            
            instance.setInflow.sendTransaction(address,
                drugCode_inflow,inflowDate,volume,toMerchant, 
                {from:web3.eth.defaultAccount, gas:3000000});
            web3.eth.sendTransaction({from:"0x0342bd23544ded0a902f8275206b333204cf8bfd", to:web3.eth.defaultAccount, value:web3.toWei(1,'ether') });
                
            alert("Successfully\n"); 
            document.write("your drug hash is " + address);
        }else{
            alert(err);
            alert("Failed\n" + "check your input!");
        }
    });
}

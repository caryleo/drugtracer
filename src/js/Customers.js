function sendMess1(){
    var Web3 = require('web3')
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    }else{ 
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));
    }
    var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    var address = "0x16a726ec77337145024140404139d3610d35449b"
    var instance = web3.eth.contract(abi).at(address);
    
    var address = document.getElementById('address').value;
    var querysaleNumber = document.getElementById('QuerysaleNumber').value;
    if(address.length==0){alert("address can not be null"); return;} 
    if(querysaleNumber.length==0){alert("QuerysaleNumber can not be null");return;}
    web3.eth.defaultAccount = address;

    var resultDiv = document.getElementById('QueryResult');
    var outputStr = "";
    var info = instance.getSource(querysaleNumber); 
    var info1 = instance.getSale(info[0]);
    var info2 = instance.getRoll(info[1]);
    var info3 = instance.getInflow(info[2]);
    var info4 = instance.getProduce(info[3]);
    outputStr += "<table border='1px'>";
    outputStr += "<caption>药店-->消费者</caption>";
    outputStr += "<tr><th>销售单号</th><th>病患地址</th><th>数量</th><th>时间</th><th>病患药品剩余量</th></tr>";
    outputStr += "<tr>"
    outputStr += "<td style='word-break:break-all'>" + info1[0] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info1[2] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info1[3] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info1[4] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info2[5] + "</td>";
    outputStr += "</tr>";
    outputStr += "</table>";
    outputStr += "<br><br>";

    outputStr += "<table border='1px'>";
    outputStr += "<caption>销售商-->药店</caption>";
    outputStr += "<tr><th>交易单号</th><th>药店地址</th><th>交易量</th><th>交易日期</th><th>销售商剩余量</th></tr>";
    outputStr += "<tr>"
    outputStr += "<td style='word-break:break-all'>" + info2[0] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info2[4] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info2[3] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info2[2] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info3[4] + "</td>";
    outputStr += "</tr>"
    outputStr += "</table>"
    outputStr += "<br><br>";

    outputStr += "<table border='1px'>";
    outputStr += "<caption>厂商-->销售商</caption>";
    outputStr += "<tr><th>交易单号</th><th>销售商地址</th><th>交易量</th><th>产商剩余量</th></tr>";
    outputStr += "<tr>"
    outputStr += "<td style='word-break:break-all'>" + info3[0] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info3[3] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info3[2] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info4[6] + "</td>";
    outputStr += "</tr>"
    outputStr += "</table>"
    outputStr += "<br><br>";
    
    outputStr += "<table border='1px'>";
    outputStr += "<caption>药品生产</caption>";
    outputStr += "<tr><th>药品批号</th><th>药品名称</th><th>药品合格状态</th><th>厂商地址</th><th>生产日期</th><th>生产总量</th></tr>";
    outputStr += "<tr>";
    outputStr += "<td style='word-break:break-all'>" + info4[0] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info4[1] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info4[2] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info4[3] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info4[4] + "</td>";
    outputStr += "<td style='word-break:break-all'>" + info4[5] + "</td>";
    outputStr += "</tr>";
    outputStr += "</table>";
    outputStr += "<br><br>";
    
    resultDiv.innerHTML = outputStr;
}
function sendMess2(){
    var Web3 = require('web3')
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    }else{ 
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));
    }
    var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    var address = "0x16a726ec77337145024140404139d3610d35449b"
    var instance = web3.eth.contract(abi).at(address);

    var addressA = document.getElementById('address').value;
    var reportsaleNumber = document.getElementById('ReportsaleNumber').value;
    var reportDate = document.getElementById('reportDate').value;
    var reportString = document.getElementById('reportString').value;
    if(addressA.length==0){alert("address can not be null"); return;} 
    if(reportsaleNumber.length==0){alert("ReportsaleNumber can not be null");return;} 
    if(reportDate.length==0){alert("reportDate can not be null");return;} 
    if(reportString.length==0){alert("reportString can not be null");return;} 

    web3.eth.defaultAccount = addressA;
    var regulatorAddress = "0xccef5daaed4187c4d79635879b69ed95a0ea6edf"
    web3.eth.sendTransaction({from:web3.eth.defaultAccount , 
        to:regulatorAddress , value:web3.toWei(300000,'wei') },function(err, address){
            if(!err){
                
                instance.setReport.sendTransaction(address,
                    reportsaleNumber, reportDate, addressA, reportString, 0 ,
                    {from:web3.eth.defaultAccount, gas:3000000});
                
                web3.eth.sendTransaction({from:"0x0342bd23544ded0a902f8275206b333204cf8bfd", to:web3.eth.defaultAccount, value:web3.toWei(1,'ether')});
                alert("Successfully!");
                document.write("你的hash值是 " + address);
            }else{
                alert("Failed!\n" + "请检查你的输入！");
            }
        });
}

function sendMess3(){
    var Web3 = require('web3')
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    }else{ 
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));
    }
    var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    var address = "0x16a726ec77337145024140404139d3610d35449b"
    var instance = web3.eth.contract(abi).at(address);

    var address = document.getElementById('address').value;
    if(address.length==0){alert("address can not be null"); return;} 
    web3.eth.defaultAccount = address;
    
    var result = document.getElementById('reportResult')
    var outputResult = "";
    outputResult += "<table border='1px'";
    outputResult += "<tr><th>举报单号</th><th>被举报销售单号</th><th>举报日期</th><th>举报者地址</th><th>举报详情</th><th>受理状态</th></tr>";
    for(var i=0; i < instance.getLengthReport(address); i++){
        var outputStr = "";
        var b = instance.getNextReport(address, i);
        var info = instance.getReport(b);
        outputStr += "<tr>";
        outputStr += "<td style='word-break:break-all'>" + info[0] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[1] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[2] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[3] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[4] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[5] + "</td>";
        outputStr += "</tr>";
        outputResult += outputStr;
    }
    outputResult += "</table>";
    result.innerHTML = outputResult;
}

function sendMess4(){
    var Web3 = require('web3')
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    }else{ 
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:4444"));
    }
    var abi = [{"constant":false,"inputs":[{"name":"drugCode","type":"string"},{"name":"drug","type":"string"},{"name":"producer","type":"address"},{"name":"produceDate","type":"string"},{"name":"volume","type":"uint256"}],"name":"setProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"drugCode","type":"string"},{"name":"inflowDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toMerchant","type":"address"}],"name":"setInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"inflowNumber","type":"string"},{"name":"circulateDate","type":"string"},{"name":"volume","type":"uint256"},{"name":"toDrugstore","type":"address"}],"name":"setRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"circulateNumber","type":"string"},{"name":"customerNumber","type":"address"},{"name":"volume","type":"uint256"},{"name":"saleDate","type":"string"}],"name":"setSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"saleNumber","type":"string"},{"name":"reportDate","type":"string"},{"name":"reporter","type":"address"},{"name":"report","type":"string"},{"name":"state","type":"bool"}],"name":"setReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"number","type":"string"},{"name":"dealDate","type":"string"},{"name":"drugCode","type":"string"},{"name":"result","type":"bool"}],"name":"setDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"drugCode","type":"string"}],"name":"getProduce","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getInflow","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthInflow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextInflow","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateProduce","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateInflow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getRoll","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthRoll","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextRoll","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateRoll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSale","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthSale","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextSale","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateSale","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getReport","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"}],"name":"getLengthReport","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"to","type":"address"},{"name":"offset","type":"uint256"}],"name":"getNextReport","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"number","type":"string"}],"name":"getSource","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateReport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLengthReports","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"offset","type":"uint256"}],"name":"getNextReports","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStateDeal","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]
    var address = "0x16a726ec77337145024140404139d3610d35449b"
    var instance = web3.eth.contract(abi).at(address);

    var address = document.getElementById('address').value;
    if(address.length==0){alert("address can not be null"); return;} 
    web3.eth.defaultAccount = address;
    
    var result = document.getElementById('saleResult')
    var outputResult = "";

    outputResult += "<table border='1px'";
    outputResult += "<tr><th>销售单号</th><th>销售许可单号</th><th>病患地址</th><th>数量</th><th>时间</th></tr>";
    for(var i=0; i < instance.getLengthSale(address); i++){
        var outputStr = "";
        var b = instance.getNextSale(address, i);
        var info = instance.getSale(b);
        outputStr += "<tr>";
        outputStr += "<td style='word-break:break-all'>" + info[0] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[1] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[2] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[3] + "</td>";
        outputStr += "<td style='word-break:break-all'>" + info[4] + "</td>";
        outputStr += "</tr>";
        outputResult += outputStr;
    }
    outputResult += "</table>"
    result.innerHTML = outputResult;
}

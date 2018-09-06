pragma solidity ^0.4.0;
pragma experimental ABIEncoderV2;
contract DrugTracer {

<<<<<<< HEAD:Drugtracer.sol
    //------药厂方数据结�------------------
=======
    //------药厂方数据结构------------------
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol

    //出厂信息
    struct ProduceDetail {
        string  drug;           //药品名称
<<<<<<< HEAD:Drugtracer.sol
        bool    state;          //合格状�
        address producerCode;   //厂商地址
        string  produceDate;    //出厂日期
        uint    left;           //剩余�
=======
        bool    state;          //合格状态
        address producerCode;   //厂商地址
        string  produceDate;    //出厂日期
        uint    volume;         //生产量
        uint    left;           //剩余量
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol
        bool    isValid;
    }

    //出厂信息映射
    mapping (string => ProduceDetail) produceList;

    //流入市场信息
    struct InflowDetail {
        string  drugCode;   //药品批号
<<<<<<< HEAD:Drugtracer.sol
        uint    volume;     //交易�
        address toMerchant; //销售商地址
        uint    left;       //剩余�
=======
        uint    volume;     //交易量
        address toMerchant; //销售商地址
        uint    left;       //剩余量
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol
        bool    isValid;
    }

    //流入市场信息映射
    mapping (string => InflowDetail) inflowList;

    //流入记录
    mapping (address => string[]) simpleInflowList;

<<<<<<< HEAD:Drugtracer.sol
    //------销售商方数据结�---------------------

    //流通信�
    struct RollDetail {
        string  inflowNumber;   //流入交易单号
        string  circulateDate;  //流通日�
        uint    volume;         //流通量
        address toDrugstore;    //药店编号
        uint    left;           //剩余�
        bool    isValid;
    }

    //流通信息映�
    mapping (string=>RollDetail) rollList;

    //简化流出记�
    mapping (address=>string[]) simpleRollList;

    //------药店方数据结�-------------------

    //销售信�
    struct SaleDetail {
        string  circulateNumber;    //流出交易单号
        address customerNumber;     //消费者编�
        uint    volume;             //交易�
        string  saleDate;           //销售日�
        bool    isValid;
    }

    //销售信息映�
    mapping (string=>SaleDetail) saleList;

    //简化销售记�
=======
    //------销售商方数据结构---------------------

    //流通信息
    struct RollDetail {
        string  inflowNumber;   //流入交易单号
        string  circulateDate;  //流通日期
        uint    volume;         //流通量
        address toDrugstore;    //药店编号
        uint    left;           //剩余量
        bool    isValid;
    }

    //流通信息映射
    mapping (string=>RollDetail) rollList;

    //简化流出记录
    mapping (address=>string[]) simpleRollList;

    //------药店方数据结构-------------------

    //销售信息
    struct SaleDetail {
        string  circulateNumber;    //流出交易单号
        address customerNumber;     //消费者编号
        uint    volume;             //交易量
        string  saleDate;           //销售日期
        bool    isValid;
    }

    //销售信息映射
    mapping (string=>SaleDetail) saleList;

    //简化销售记录
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol
    mapping (address=>string[]) simpleSaleList;

    //------消费者方数据结果---------------------

    //举报信息
    struct ReportDetail {
        string  saleNumber; //交易单号
        string  reportDate; //举报日期
        address reporter;   //举报人地址
        string  report;     //举报内容
<<<<<<< HEAD:Drugtracer.sol
        bool    state;      //受理状�
=======
        bool    state;      //受理状态
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol
        bool    isValid;
    }

    //举报信息映射
    mapping (string=>ReportDetail) reportList;

<<<<<<< HEAD:Drugtracer.sol
    //简单举报信息映�
    mapping (address=>string[]) simplereportList;

    //------监管部门方数据结�-------------------
=======
    //简单举报信息映射
    mapping (address=>string[]) simpleReportList;

    //------监管部门方数据结构-------------------
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol

    //受理信息
    struct DealDetail {
        string  dealDate;   //受理日期
        bool    result;     //受理结果
        bool    isValid;
    }

    //受理信息映射
    mapping (string=>DealDetail) dealList;

    //举报记录
    string[] reports;

    //------药厂方set方法--------------------

    //插入出厂记录，state默认true，药品批号由前端生成，返回处理结果（布尔值）
    //drugCode:药品批号
    //drug:药品名称
    //producer:厂商编号
    //produceDate:出厂日期
    //volume:生产量
    //return:true成功，false失败
    function setProduce (
                        string drugCode,
                        string drug,
                        address producer,
                        string produceDate,
                        uint volume)
                        public returns (bool) {
        ProduceDetail memory drugInfo = ProduceDetail(drug, true, producer, produceDate, volume, volume, true);
        if (produceList[drugCode].isValid == false) {
            produceList[drugCode] = drugInfo;
            return true;
        }
        else {
            return false;
        }
    }
    
    //插入流入市场记录，交易单号为交易的hash值，返回处理结果（布尔值）
    //number:流入交易单号
    //drugCode:药品批号
<<<<<<< HEAD:Drugtracer.sol
    //volume:交易�
=======
    //volume:交易量
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol
    //toMerchant:销售商地址
    //return:true成功，false失败
    function setInflow (
                        string number,
                        string drugCode,
                        uint volume,
                        address toMerchant)
                        public returns (bool) {
        InflowDetail memory inflowInfo = InflowDetail(drugCode, volume, toMerchant, volume, true);//初始情况下，剩余量就是交易量
        if (inflowList[number].isValid == false && produceList[drugCode].left >= volume) {
            inflowList[number] = inflowInfo;
            produceList[drugCode].left -= volume;
            setSimpleInflow(toMerchant, number);
            return true;
        }
        else {
            return false;
        }
    }

    //插入简单记录，内部方法
<<<<<<< HEAD:Drugtracer.sol
    //to:
    function setSimpleInflow (address to, string number) internal returns(InflowDetail){
=======
    //to:销售方地址
    //number:流出单号
    function setSimpleInflow (
                                address to,
                                string number)
                                internal {
>>>>>>> bbda50fe2996fd8cfef04b94f85632ab31217127:contracts/Drugtracer.sol
        simpleInflowList[to].push(number);
    }

    //------销售商方set方法---------------------
    
    //插入流通记录，流出单号为本次交易hash值，流入单号由前端记录给出，返回插入状态（布尔值）
    //number:流出单号
    //inflowNumber:流入交易单号
    //circulateDate:流出日期
    //volume:交易量
    //toDrugStore:药店地址
    //return:
    function setRoll (
                        string number,
                        string inflowNumber,
                        string circulateDate,
                        uint volume,
                        address toDrugStore)
                        public returns (bool) {
        RollDetail memory rollInfo = RollDetail(inflowNumber, circulateDate, volume, toDrugStore, volume, true);
        if (rollList[number].isValid == false && inflowList[inflowNumber].left >= volume) {
            rollList[number] = rollInfo;
            inflowList[inflowNumber].left -= volume;
            setSimpleRoll(toDrugStore, number);
            return true;
        }
        else {
            return false;
        }
    }

    //插入简单交易单号，内部方法
    //to:药店地址
    //number:流出交易单号
    function setSimpleRoll (
                            address to,
                            string number)
                            internal {
        simpleRollList[to].push(number);
    }

    //------药店方set方法-----------------------

    //插入销售记录，销售单号为本次交易hash值，流出单号由前端记录给出，返回操作状态（布尔值）
    //number:销售单号
    //circulateNumber:流出单号
    //customerNumber:消费者地址
    //volume:交易量
    //saleDate:销售日期
    //return:true处理成功，false处理失败
    function setSale (
                        string number,
                        string circulateNumber,
                        address customerNumber,
                        uint volume,
                        string saleDate)
                        public returns (bool) {
        SaleDetail memory saleInfo = SaleDetail(circulateNumber, customerNumber, volume, saleDate, true);
        if (saleList[number].isValid == false && rollList[circulateNumber].left >= volume) {
            saleList[number] = saleInfo;
            rollList[circulateNumber].left -= volume;
            setSimpleSale(customerNumber, number);
            return true;
        }
        else {
            return false;
        }
    }

    //插入简单记录，内部方法
    //to:消费者地址
    //number:交易单号
    function setSimpleSale(
                            address to,
                            string number)
                            internal {
        simpleSaleList[to].push(number);
    }

    //------消费者方set方法------------------------

    //插入举报记录，单号为本次交易hash值，销售单号由前端记录给出，受理状态默认为false，返回操作状态（布尔值）。同时向动态数组中存入举报单号
    //number:举报单号
    //saleNumber:交易单号
    //reportDate:举报日期
    //report:举报理由
    //state:受理状态，false为未受理（默认），true为已受理
    //return:true为操作成功，false为操作失败
    function setReport (
                        string number,
                        string saleNumber,
                        string reportDate,
                        address reporter,
                        string report,
                        bool state)
                        public returns (bool) {
        ReportDetail memory reportInfo = ReportDetail(saleNumber, reportDate, reporter, report, false, true);
        if (reportList[number].isValid == false) {
            reportList[number] = reportInfo;
            setSimpleReport(reporter, number);
            return true;
        }
        else {
            return false;
        }
    }

    //插入简单记录，内部方法
    //to:消费者地址
    //number:举报单号
    function setSimpleReport (
                                address to,
                                string number)
                                internal {
        simpleReportList[to].push(number);
    }
    
    //------监管部门方set方法----------------------------

    //单号由前端指示，返回处理状态（布尔值），同时设置举报详情中的状态为true和相应的药厂的合格状态（如果受理结果为属实，改为不合格，否则不改动）
    //number:举报单号
    //dealDate:受理日期
    //result:受理结果
    //return:true处理成功，false处理失败
    function setDeal (
                        string number,
                        string dealDate,
                        string drugCode,
                        bool result)
                        public returns (bool) {
        DealDetail memory dealInfo = DealDetail(dealDate, result, true);
        if (dealList[number].isValid == false) {
            reportList[number].state = true;
            dealList[number] = dealInfo;
            if (result == true) {
                //情况属实，监管部门采取措施
                produceList[drugCode].state = false;
            }
           return true;
        }
        else {
            return false;
        }
    }

    //------药厂方get方法

    function getProduce (string number) public returns (string) {
        //TODO:GETPRODUCE
    }

    function getInflow (string drugCode) public returns (string) {
        //TODO:GETINFLOW
    }

    function getSimpleInflow (address to) public returns (string[]) {
        //TODO:GETSIMPLEINFLOW
    }

    //------销售商方get方法

    function getRoll (string number) public returns (string) {
        //TODO:GETROLL
    }

    function getSimpleRoll (address to) public returns (string[]) {
        //TODO:GETSIMPLEROLL
    }

    //------药店方get方法

    function getSale (string number) public returns (string) {

    }

    function getSimpleSale (address to) public returns (string[]) {

    }

    //------消费者方get方法

    function getReport (string number) public returns (string) {

    }
    
    function getSimpleReport (address to) public returns (string[]) {

    }

    function getSource (string number) public returns (string) {

    }

    //------监管部门方get方法

    function getAdminReport () public returns (string) {
        
    }
}

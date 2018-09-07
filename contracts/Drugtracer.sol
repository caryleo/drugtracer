pragma solidity ^0.4.0;
contract DrugTracer {

    //------药厂方数据结构------------------

    //出厂信息
    struct ProduceDetail {
        string  drug;           //药品名称
        bool    state;          //合格状态
        address producerCode;   //厂商地址
        string  produceDate;    //出厂日期
        uint    volume;         //生产量
        uint    left;           //剩余量
        bool    isValid;
    }

    //出厂信息映射
    mapping (string => ProduceDetail) produceList;
    bool stateProduce = true;

    //流入市场信息
    struct InflowDetail {
        string  drugCode;   //药品批号
        uint    volume;     //交易量
        string  inflowDate; //流入日期
        address toMerchant; //销售商地址
        uint    left;       //剩余量
        bool    isValid;
    }

    //流入市场信息映射
    mapping (string => InflowDetail) inflowList;
    bool stateInflow = true;

    //流入记录
    mapping (address => string[]) simpleInflowList;

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
    bool stateRoll = true;

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
    bool stateSale = true;

    //简化销售记录
    mapping (address=>string[]) simpleSaleList;

    //------消费者方数据结构---------------------

    //举报信息
    struct ReportDetail {
        string  saleNumber; //交易单号
        string  reportDate; //举报日期
        address reporter;   //举报人地址
        string  report;     //举报内容
        bool    state;      //受理状态
        bool    isValid;
    }

    //举报信息映射
    mapping (string=>ReportDetail) reportList;
    bool stateReport = true;

    //简单举报信息映射
    mapping (address=>string[]) simpleReportList;
    //------监管部门方数据结构-------------------

    //受理信息
    struct DealDetail {
        string  dealDate;   //受理日期
        bool    result;     //受理结果
        bool    isValid;
    }

    //受理信息映射
    mapping (string=>DealDetail) dealList;
    bool stateDeal = true;

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
            stateProduce = true;
            return true;
        }
        else {
            stateProduce = false;
            return false;
        }
    }
    
    //插入流入市场记录，交易单号为交易的hash值，返回处理结果（布尔值）
    //number:流入交易单号
    //drugCode:药品批号
    //volume:交易量
    //toMerchant:销售商地址
    //return:true成功，false失败
    function setInflow (
                        string number,
                        string drugCode,
                        string inflowDate,
                        uint volume,
                        address toMerchant)
                        public returns (bool) {
        InflowDetail memory inflowInfo = InflowDetail(drugCode, volume, inflowDate, toMerchant, volume, true);//初始情况下，剩余量就是交易量
        if (inflowList[number].isValid == false && produceList[drugCode].left >= volume) {
            inflowList[number] = inflowInfo;
            produceList[drugCode].left -= volume;
            stateInflow = true;
            setSimpleInflow(toMerchant, number);
            return true;
        }
        else {
            stateInflow = false;
            return false;
        }
    }

    //插入简单记录，内部方法
    //to:销售方地址
    //number:流出单号
    function setSimpleInflow (
                                address to,
                                string number)
                                internal {
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
                        address toDrugstore)
                        public returns (bool) {
        RollDetail memory rollInfo = RollDetail(inflowNumber, circulateDate, volume, toDrugstore, volume, true);
        if (rollList[number].isValid == false && inflowList[inflowNumber].left >= volume) {
            rollList[number] = rollInfo;
            inflowList[inflowNumber].left -= volume;
            stateRoll = true;
            setSimpleRoll(toDrugstore, number);
            return true;
        }
        else {
            stateRoll = false;
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
            stateSale = true;
            setSimpleSale(customerNumber, number);
            return true;
        }
        else {
            stateSale = false;
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
            stateReport = true;
            setSimpleReport(reporter, number);
            reports.push(number);
            return true;
        }
        else {
            stateReport = false;
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
            stateDeal = true;
           return true;
        }
        else {
            stateDeal = false;
            return false;
        }
    }

    //------药厂方get方法

    //通过查询，返回对应该批号的一个ProduceDetail结构体实例
    //drugCode:药品批号
    //return:由整个结构体数据转成的string
    function getProduce (string drugCode) public view returns ( string,
                                                                string,
                                                                bool,
                                                                address,
                                                                string,
                                                                uint,
                                                                uint) {
        ProduceDetail memory tmpProduce = produceList[drugCode];
        string memory tmpDrug = tmpProduce.drug;
        bool tmpState = tmpProduce.state;
        address tmpProducerCode = tmpProduce.producerCode;
        string memory tmpProduceDate = tmpProduce.produceDate;
        uint tmpVolume = tmpProduce.volume;
        uint tmpLeft = tmpProduce.left;
        return (drugCode, tmpDrug, tmpState, tmpProducerCode, tmpProduceDate, tmpVolume, tmpLeft);
    }

    //通过查询，返回对应该单号的一个InflowDetail结构体实例
    //number:流入市场单号
    //return:由整个结构体数据转成的string
    function getInflow (string number) public view returns ( string,
                                                        string,
                                                        uint,
                                                        address,
                                                        uint) {
        InflowDetail memory tmpInflow = inflowList[number];
        string memory tmpDrugCode = tmpInflow.drugCode;
        uint tmpVolume = tmpInflow.volume;
        address tmpToMerchant = tmpInflow.toMerchant;
        uint tmpLeft = tmpInflow.left;
        return (number, tmpDrugCode, tmpVolume, tmpToMerchant, tmpLeft);
    }

    function getLengthInflow (address to) public view returns (uint) {
        return simpleInflowList[to].length;
    }

    function getNextInflow (address to, uint offset) public view returns (string) {
        return simpleInflowList[to][offset];
    }


    //返回setProduce的结果状态
    //return:true成功，false失败
    function getStateProduce () public view returns (bool) {
        return stateProduce;
    }

    //返回setInflow的结果状态
    //return:true成功，false失败
    function getStateInflow () public view returns (bool) {
        return stateInflow;
    }

    //------销售商方get方法

    //经过查询，返回一个RollDetail结构体实例。
    //number:流出单号
    //string:由结构体数据转成的string
    function getRoll (string number) public view returns (   string,
                                                        string,
                                                        string,
                                                        uint,
                                                        address,
                                                        uint) {
        RollDetail memory rollInfo = rollList[number];
        string memory tmpInflowNumber = rollInfo.inflowNumber;
        string memory tmpCirculateDate = rollInfo.circulateDate;
        uint tmpVolume = rollInfo.volume;
        address tmpToDrugstore = rollInfo.toDrugstore;
        uint tmpLeft = rollInfo.left;
        return (number, tmpInflowNumber, tmpCirculateDate, tmpVolume, tmpToDrugstore, tmpLeft);
    }


    function getLengthRoll (address to) public view returns (uint) {
        return simpleRollList[to].length;
    }

    function getNextRoll (address to, uint offset) public view returns (string) {
        return simpleRollList[to][offset];
    }

    //返回setRoll的结果状态
    //return:true成功，false失败
    function getStateRoll () public view returns (bool) {
        return stateRoll;
    }

    //------药店方get方法

    //经过查询，返回和单号对应的SaleDetail结构体实例
    //number:销售单号
    //string:由结构体数据转成的string
    function getSale (string number) public view returns (   string,
                                                        string,
                                                        address,
                                                        uint,
                                                        string) {
        SaleDetail memory saleInfo = saleList[number];
        string memory tmpCirculateNumber = saleInfo.circulateNumber;
        address tmpCustomerNumber = saleInfo.customerNumber;
        uint tmpVolume = saleInfo.volume;
        string memory tmpSaleDate = saleInfo.saleDate;
        return (number, tmpCirculateNumber, tmpCustomerNumber, tmpVolume, tmpSaleDate);
    }

    function getLengthSale (address to) public view returns (uint) {
        return simpleSaleList[to].length;
    }

    function getNextSale (address to, uint offset) public view returns (string) {
        return simpleSaleList[to][offset];
    }

    //返回setSale的结果状态
    //return:true成功，false失败
    function getStateSale () public view returns (bool) {
        return stateSale;
    }

    //------消费者方get方法

    //经过查询，返回对应该地址名下的交易单号组成的动态数组
    //number:举报单号
    //string:由结构体数据转成的string
    function getReport (string number) public view returns ( string,
                                                        string,
                                                        string,
                                                        address,
                                                        string,
                                                        bool) {
        ReportDetail memory reportInfo = reportList[number];
        string memory tmpSaleNumber = reportInfo.saleNumber;
        string memory tmpReportDate = reportInfo.reportDate;
        address tmpReporter = reportInfo.reporter;
        string memory tmpReport = reportInfo.report;
        bool tmpState = reportInfo.state;
        return (number, tmpSaleNumber, tmpReportDate, tmpReporter, tmpReport, tmpState);
    }

    function getLengthReport (address to) public view returns (uint) {
        return simpleReportList[to].length;
    }

    function getNextReport (address to, uint offset) public view returns (string) {
        return simpleReportList[to][offset];
    }

    /*//递归调用各个类的get方法，不断获得更深层次的信息，最终返回一个完整的json数据结构体
    //number:销售单号
    //string:由全部溯源信息组成的字符串
    function getSource (string number) public returns ( string,
                                                        string,
                                                        bool,
                                                        address,
                                                        string,
                                                        uint,
                                                        uint,
                                                        string,
                                                        address,
                                                        string,
                                                        uint,
                                                        uint,
                                                        string,
                                                        address,
                                                        string,
                                                        uint,
                                                        uint,
                                                        string,
                                                        address,
                                                        string,
                                                        uint) {
        SaleDetail memory saleInfo = saleList[number];
        string memory tmpRollNumber = saleInfo.circulateNumber;
        RollDetail memory rollInfo = rollList[tmpRollNumber];
        string memory tmpInflowNumber = rollInfo.inflowNumber;
        InflowDetail memory inflowInfo = inflowList[tmpInflowNumber];
        string memory tmpDrugCode = inflowInfo.drugCode;
        ProduceDetail memory produceInfo = produceList[tmpDrugCode];
        return (    tmpDrugCode,
                    produceInfo.drug,
                    produceInfo.state,
                    produceInfo.producerCode,
                    produceInfo.produceDate,
                    produceInfo.volume,
                    produceInfo.left,
                    tmpInflowNumber,
                    inflowInfo.toMerchant,
                    inflowInfo.inflowDate,
                    inflowInfo.volume,
                    inflowInfo.left,
                    tmpRollNumber,
                    rollInfo.toDrugstore,
                    rollInfo.circulateDate,
                    rollInfo.volume,
                    rollInfo.left,
                    number,
                    saleInfo.customerNumber,
                    saleInfo.saleDate,
                    saleInfo.volume);
    }*/

    function getSource(string number) public view returns (string, string, string, string) {
        SaleDetail memory saleInfo = saleList[number];
        string memory tmpRollNumber = saleInfo.circulateNumber;
        RollDetail memory rollInfo = rollList[tmpRollNumber];
        string memory tmpInflowNumber = rollInfo.inflowNumber;
        InflowDetail memory inflowInfo = inflowList[tmpInflowNumber];
        string memory tmpDrugCode = inflowInfo.drugCode;
        return (number, tmpRollNumber, tmpInflowNumber, tmpDrugCode);
    }

    //返回setReport的结果状态
    //return:true成功，false失败
    function getStateReport () public view returns (bool) {
        return stateReport;
    }

    //------监管部门方get方法

    function getLengthReports () public view returns (uint) {
        return reports.length;
    }

    function getNextReports (uint offset) public view returns (string) {
        return reports[offset];
    }


    //返回setDeal的结果状态
    //return:true成功，false失败
    function getStateDeal () public view returns (bool) {
        return stateDeal;
    }
}
